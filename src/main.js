const string = `
.cat-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 188px;
    background: #bfbab3;
    border-radius: 30px 90px 90px 90px;
}
.ear1, .ear2 {
    position: absolute;
    left: 20px;
    bottom: 150px;
    height: 50px;
    width: 50px;
    border-radius: 12px;
    background: #bfbab3;
    transform: rotate(45deg);
}
.ear2{
    position: absolute;
    left: 110px;
    bottom: 150px;
}
@keyframes wave{
    0%{
        transform: rotate(45deg);
    }
    33%{
        transform: rotate(55deg);
    }
    66%{
        transform: rotate(35deg);
    }
    100%{
        transform: rotate(45deg);
    }
}
.ear1:hover, .ear2:hover{
    animation: wave 400ms infinite linear;
}
.stripe1, .stripe2, .stripe3 {
    position: absolute;
    left: 70px;
    top: 0;
    width: 10px;
    height: 25px;
    background: #808080;
    border-radius: 10px;
}
.stripe2 {
    position: absolute;
    left: 85px;
    top: 0;
}
.stripe3 {
    position: absolute;
    left: 100px;
    top: 0;
}
.stripe4, .stripe5 {
    position: absolute;
    left: 160px;
    top: 0;
    width: 20px;
    height: 25px;
    background: #808080;
    border-radius: 0 0 10px 10px;
}
.stripe5 {
    position: absolute;
    left: 190px;
    top: 0;
}
.beard-left1, .beard-right1, .beard-left2, .beard-right2 {
    width: 30px;
    height: 10px;
    background: #4e2c11;
    border-radius: 10px;
}
.beard-left1 {
    position: absolute;
    top: 45px;
    left: -10px;
    transform: rotate(10deg);
}
.beard-right1 {
    position: absolute;
    top: 65px;
    left: -10px;
    transform: rotate(-10deg);
}
.beard-left2 {
    position: absolute;
    top: 45px;
    left: 160px;
    transform: rotate(-10deg);
}
.beard-right2 {
    position: absolute;
    top: 65px;
    left: 160px;
    transform: rotate(10deg);
}
.eye1, .eye2 {
    position: absolute;
    left: 40px;
    top: 40px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: #4e2c11;
}
.eye2 {
    position: absolute;
    left: 125px;
    top: 40px;
}
.nose > p {
    position: absolute;
    left: 80px;
    top: 40px;
    color: #4e2c11;
    font-size: 22px;
    font-weight: 800;
}
@keyframes wave2{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover p{
    transform-origin: center bottom;
    animation: wave2 300ms infinite linear;
}
.footer1, .footer2{
    position: absolute;
    bottom: -20px;
    left: 50px;
    height: 35px;
    width: 30px;
    background: #bfbab3;
    border-radius: 15px;
}
.footer2{
    position: absolute;
    bottom: -20px;
    left: 200px;
}
.tail-row {
    position: absolute;
    bottom: 120px;
    left: 260px;
    height: 25px;
    width: 80px;
    background: #bfbab3;
    border-radius: 15px;
}
.tail-row::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 40px;
    height: 25px;
    width: 15px;
    background: #808080;
}
.tail-col {
    position: absolute;
    bottom: 120px;
    left: 320px;
    height: 50px;
    width: 25px;
    background: #bfbab3;
    border-radius: 15px;
}
`
let n = 1
let speed = 100
let demo = document.querySelector("#demo")
let demo2 = document.querySelector("#demo2")
let run = () => {
    n += 1
    if(n > string.length){
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substring(0, n)
    demo2.innerHTML = string.substring(0, n)
    demo.scrollTop = demo.scrollHeight 
}
const paly = () => {
    return setInterval (run,speed)
}
const pause = () => {
    window.clearInterval(id)
}

demo.innerText = string.substring(0, n)
demo2.innerHTML = string.substring(0, n)

let id = paly()

document.querySelector('#btnPause').onclick = () => {
    pause()
}
document.querySelector('#btnPlay').onclick = () => {
    id = paly()
}
document.querySelector('#btnSlow').onclick = () => {
    pause()
    speed = 200
    id = paly()
}
document.querySelector('#btnNormal').onclick = () => {
    pause()
    speed = 100
    id = paly()
}
document.querySelector('#btnFast').onclick = () => {
    pause()
    speed = 0
    id = paly()
}