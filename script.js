let auth=false
let username=""
let bux=1000

function format(num){
return num.toLocaleString()
}

const container=document.getElementById("item-background")

const items=["images/item1.png","images/item2.png","images/item3.png"]

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

const announcement=""

if(announcement){

const bar=document.getElementById("announcementBar")

bar.style.display="block"
bar.innerText=announcement

}

const modal=document.getElementById("loginModal")
const openBtn=document.getElementById("startBtn")
const closeBtn=document.getElementById("closeModal")
const loginBtn=document.getElementById("loginSubmit")

openBtn.onclick=()=>modal.style.display="flex"
closeBtn.onclick=()=>modal.style.display="none"

function renderAuth(){

const area=document.getElementById("authArea")
const startBtn=document.getElementById("startBtn")

if(!auth){

startBtn.style.display="inline-block"

area.innerHTML=`<button class="login-btn" id="navLogin">Login</button>`

document.getElementById("navLogin").onclick=()=>modal.style.display="flex"

}else{

startBtn.style.display="none"

area.innerHTML=`

<div class="profile" id="profile">

<img src="images/pfp.png">

<div class="dropdown" id="dropdown">

<img src="images/pfp.png">

<div class="username">@${username}</div>

<div class="balance">
<img src="images/bux.png">
<div>${format(bux)}</div>
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

loginBtn.onclick=()=>{

const input=document.getElementById("usernameInput").value.trim()

if(!input)return

loginBtn.innerText="Logging in..."

setTimeout(()=>{

auth=true
username=input
bux=1000

modal.style.display="none"

renderAuth()

notify(`Successfully Logged In As ${username}!`)

loginBtn.innerText="Login"

},2000)

}

function logout(){

auth=false
username=""
bux=0

location.reload()

}

function notify(msg){

const box=document.getElementById("notify")

box.innerText=msg
box.style.display="block"

setTimeout(()=>{

box.style.display="none"

},3000)

}

const wins=document.getElementById("liveWins")

const names=[
"BuilderPro","NoobMaster","BlockyKing",
"PixelGamer","EpicRBLX","ShadowNoob",
"ObbyGod","BrickLord","SpeedRunner",
"RedDominus","GoldenNoob","BloxWizard"
]

function addWin(){

if(wins.children.length>=5)return

const name=names[Math.floor(Math.random()*names.length)]

const amount=Math.floor(Math.random()*9000)+50

const div=document.createElement("div")

div.className="win"

div.innerHTML=`${name} won <img src="images/bux.png"> ${format(amount)}`

wins.appendChild(div)

const stayTime=Math.random()*4000+4000

setTimeout(()=>{

div.classList.add("fadeOut")

setTimeout(()=>div.remove(),500)

},stayTime)

}

setInterval(addWin,2000+Math.random()*3000)
