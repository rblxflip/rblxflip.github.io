let auth=false
let username=""
let bux=0

/* BACKGROUND ITEMS */

const container=document.getElementById("item-background")

const items=[
"images/item1.png",
"images/item2.png",
"images/item3.png"
]

function spawnItem(){

const img=document.createElement("img")

img.src=items[Math.floor(Math.random()*items.length)]

img.classList.add("bg-item")

img.style.left=Math.random()*100+"vw"
img.style.top=Math.random()*100+"vh"

container.appendChild(img)

setTimeout(()=>img.remove(),4000)

}

setInterval(spawnItem,1200)


/* LOGIN MODAL */

const modal=document.getElementById("loginModal")
const openBtn=document.getElementById("startBtn")
const closeBtn=document.getElementById("closeModal")
const loginBtn=document.getElementById("loginSubmit")

openBtn.onclick=()=>modal.style.display="flex"
closeBtn.onclick=()=>modal.style.display="none"


/* AUTH RENDER */

function renderAuth(){

const area=document.getElementById("authArea")

if(!auth){

area.innerHTML=`<button class="login-btn" id="navLogin">Login</button>`

document.getElementById("navLogin").onclick=()=>modal.style.display="flex"

}else{

area.innerHTML=`

<div class="profile" id="profile">

<img src="images/pfp.png">

<div class="dropdown" id="dropdown">

<img src="images/pfp.png" width="40">

<p>${username}</p>

<div class="bux">
<img src="images/bux.png" width="16"> ${bux}
</div>

<button id="logoutBtn">Logout</button>

</div>

</div>
`

const profile=document.getElementById("profile")
const dropdown=document.getElementById("dropdown")

profile.onclick=()=>{

dropdown.style.display=
dropdown.style.display==="block"?"none":"block"

}

document.getElementById("logoutBtn").onclick=logout

}

}

renderAuth()


/* LOGIN */

loginBtn.onclick=()=>{

const input=document.getElementById("usernameInput").value.trim()

if(!input)return

loginBtn.disabled=true
loginBtn.innerText="..."

setTimeout(()=>{

auth=true
username=input
bux=0

modal.style.display="none"

notify(`Successfully Logged In As ${username}!`)

renderAuth()

loginBtn.disabled=false
loginBtn.innerText="Login"

},2000)

}


/* NOTIFICATION */

function notify(msg){

const box=document.getElementById("notify")

box.innerText=msg
box.style.display="block"

setTimeout(()=>box.style.display="none",3000)

}


/* LOGOUT */

function logout(){

auth=false
username=""
bux=0

if(location.pathname.includes("index")){
location.reload()
}else{
location.href="index.html"
}

}


/* CONTINUOUS LIVE FEED */

const feedTrack=document.getElementById("feedTrack")

const fakeNames=[
"BuilderPro","NoobMaster","BlockyKing","PixelGamer",
"EpicRBLX","SwordMaster","LavaRunner","BrickLord",
"ShadowNoob","ObbyGod","BloxWizard","SpeedRunner",
"RedDominus","GoldenNoob","ObbyChampion"
]

let feedOffset=0

function addFeedItem(){

const name=fakeNames[Math.floor(Math.random()*fakeNames.length)]
const amount=Math.floor(Math.random()*5000)+50

const div=document.createElement("div")
div.className="feed-item"

div.innerHTML=`${name} won <img src="images/bux.png"> ${amount}`

feedTrack.appendChild(div)

}

/* preload feed */

for(let i=0;i<20;i++){
addFeedItem()
}

/* keep adding wins */

setInterval(addFeedItem,2500)

/* smooth scrolling ticker */

function animateFeed(){

feedOffset-=0.3

feedTrack.style.transform=`translateX(${feedOffset}px)`

/* remove items that leave screen */

const first=feedTrack.firstElementChild

if(first){

const rect=first.getBoundingClientRect()

if(rect.right < 0){

feedTrack.removeChild(first)

}

}

requestAnimationFrame(animateFeed)

}

animateFeed()