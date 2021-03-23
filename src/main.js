const string=`
/*你好，我是陆燕丹，
画一个海绵宝宝送给你😀😀😀😀
   首先，我们先画它的眼睛
*/

.face {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 30px auto;
  width: 400px;
  height: 400px;
  text-align: center;
}
.eyes {
  position: relative;
  top: 10%;
  display: inline-block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 3px solid #000;
  background: white;
  -webkit-animation: blink forwards infinite 6s ease-in-out;
            animation: blink forwards infinite 6s ease-in-out;
}
.eyes::after {
  position: absolute;
  top:28%;
  left: 30%;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid #000;
  background: #0099ff;
  display: block;
}
.eyes::before {
  z-index: 1;
  position: absolute;
  top: 40%;
  left: 42%;
  content: "";
  width: 15px;
  height: 15px;
  background: black;
  border-radius: 50%;
}
/*其次，我们再画它的眉毛*/
.eyesbrow {
  position: absolute;
  top: -26px;
  left: 45px;
  height: 25px;
  width: 6px;
  background-color: #000;
}
.eyesbrow::after {
  content: "";
  display: block;
  position: absolute;
  top: 8px;
  left: -34px;
  height: 25px;
  width: 6px;
  background: #000;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.eyesbrow::before {
  content: "";
  display: block;
  position: absolute;
  top: 10px;
  right: -33px;
  height: 25px;
  width: 6px;
  background: #000;
  -webkit-transform: rotate(45deg); 
  transform: rotate(45deg); 
}
.blush-group {
  position: absolute;
  top: 20%;
  width: 400px;
}
/*然后，我们画它的鼻子*/
.nose {
  position: absolute;
  top: -28px;
  left: 44%;
  width: 42px;
  height: 80px;
  border-radius: 70%;
  border: 3px solid #000;
  background-color: rgba(253, 219, 33, 1);
}
.nose::after {
  content: "";
  position: absolute;
  top: 54%;
  left: -9%;
  background-color: rgba(253, 219, 33, 1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.blush {
  position: absolute;
  margin-top: -15px;
  border: 3px solid rgb(215, 60, 18);
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background-color: rgba(253, 219, 33, 1);
}
.blush::after {
  content: "";
  position: absolute;
  top: 60%;
  left: -4px;
  width: 30px;
  height: 40px;
  background-color: rgba(253, 219, 33, 1);
  border-radius: 50%;
  transform: rotate(50deg);
}
.blush::before {
  content: "";
  position: absolute;
  top: 80%;
  left: 60%;
  width: 20px;
  height: 40px;
  background-color: rgba(253, 219, 33, 1);
}
.blush-group .blush.left {
  left: 22%;
}
.blush-group .blush.right {
  right: 22%;
}
.freckless {
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  left: 40%;
  top: 18%;
  background-color: rgb(215, 60, 18);
  border-radius: 50%;
}
.freckless::after {
  content: "";
  display: block;
  position: absolute;
  left: 15px;
  top: 12px;
  width: 8px;
  height: 8px;
  background-color: rgb(215, 60, 18);
  border-radius: 50%;
  z-index: 1;
}
.freckless::before {
  content: "";
  display: block;
  position: absolute;
  right: 15px;
  top: 12px;
  width: 8px;
  height: 8px;
  background-color: rgb(215, 60, 18);
  border-radius: 50%;
  z-index: 1;
}
.mouth-group {
  position: absolute;
  width: 400px;
  height: 120px;
}
/*画嘴巴*/
.mouth-group .lips {
  position: absolute;
  top: -84px;
  left: 20%;
  width: 245px;
  height: 120px;
  border: 3px solid black;
  border-color: #000 transparent transparent transparent;
  border-radius: 50%/70px 70px 0 0;
  transform: rotate(180deg);
}
.mouth-group .lips::after {
  content: "";
  position: absolute;
  top: 20px;
  right: 2px;
  width: 20px;
  height: 15px;
  border: 3px solid transparent;
  border-left: 3px solid #000;
  transform: rotate(30deg);
}
.mouth-group .lips::before {
  content: "";
  position: absolute;
  top: 8px;
  right: 192px;
  width: 20px;
  height: 15px;
  border: 3px solid transparent;
  border-left: 3px solid #000;
  -webkit-transform: rotate(-30deg);
  transform: rotate(-30deg);
}
/*画牙齿*/
.tooth{
    position: absolute;
    left: 40%;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 5px;
    transform: rotate(5deg);
    border: 3px solid #000;
    z-index: 2;
}
.tooth.left{
    top: 32px;
    left: 41%;
}
.tooth.right{
    top: 32px;
    left: 51%;
    transform: rotate(-5deg);
}
/*画下巴*/
.chin {
    position: absolute;
    left: 34%;
    top: 50%;
    width: 60px;
    height: 32px;
    border-radius: 45%;
    border: 4px solid rgb(215,60,18);
}
.chin::after {
    content: '';
    position: absolute;
    left: 92%;
    top: -30%;
    width: 60px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid rgb(215,60,18);
}
.chin::before{
    content: '';
    position: absolute;
    left: -10%;
    top: -30%;
    background-color: rgba(253,219,33,1);
    width: 162px;
    height: 22px;
    z-index: 1;
} 
/*画T恤*/
.suit-group {
    position: absolute;
    top: 55%;
    width: 400px;
    height: 180px;
    background-color: #fff;
    border: 3px solid #000;
}
.suit-group .triangle {
    display: inline-block;
    border-bottom: 50px solid #000;
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    transform: rotate(180deg);
    margin-left: 45px;
    margin-right: 33px;
}
.suit-group .triangle::after{
    content: '';
    position: absolute;
    top:10px;
    right: -25px;
    border-bottom: 40px solid #fff;
    border-right: 25px solid transparent;
       border-left: 25px solid transparent;
}
.suit-group .tie{
    position: absolute;
    left: 41.5%;
    top: 0;
    width: 100%;
    height: 100px;
}
.suit-group .tie-top{
    box-sizing: content-box;
    position: relative;
    left: 3px;
    width: 25px;
    height: 0;
    border: 25px solid rgba(0,0,0,0);
    border-bottom: 0 solid;
    border-top: 40px solid #000;
  z-index: 10;
}
.suit-group .tie-top::after{
    content: '';
    box-sizing: content-box;
    position: absolute;
    top: -40px;
    right: -18px;
    width: 25px;
     height: 0;
    border: 18px solid rgba(0,0,0,0);
    border-bottom: 0 solid;
    border-top: 35px solid red;
}
.suit-group .tie-bottom-inner {
    width: 0;
    height: 0;
    border: 32px solid transparent;
    border-bottom: 60px solid black;
    position: relative;
    top: -70px;
  right: -8px;
    z-index: 2;
} 
.suit-group .tie-bottom-inner::after {
    content: '';
    position: absolute;
    left: -31px; 
    top: 60px;
    width: 0;
    height: 0;
    border: 32px solid transparent;
    border-top: 72px solid black;
}
.suit-group .tie-bottom-out {
    width: 0;
    height: 0;
    border: 25px solid transparent;
    border-bottom: 55px solid red;
    position: absolute;
    top: -18px;
    left: 15.78px;
    z-index: 5;
}
.suit-group .tie-bottom-out::after {
    content: '';
    position: absolute;
    left: -25px; 
    top: 55px;
    width: 0;
    height: 0;
    border: 25px solid transparent;
    border-top: 60px solid red;
} 
.pants {
    position: absolute;
    top: 88px;
    background-color: rgb(187,120,49);
    width: 100%;
    height: 50%;
    border-top: 3px solid #000;
}
.pants .belt {
    margin: 40px auto;
    max-width: 6--0px;
    border-top: 16px dashed #000;
    border-bottom: none;
    padding: 0;
}
.pore {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(174,172,12);
}
.pore {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(174,172,12);
}

.pore-01 {
    width: 40px;
    height: 40px;
    top: -20px;
    left: 10px;
}

.pore-02 {
    width: 40px;
    height: 40px;
    bottom: 46%;
    right: 14px;	
}

.pore-03 {
    width: 40px;
    height: 40px;
    bottom: 46%;
    left: 20px;
}

.pore-04 {
    width: 25px;
    height: 25px;
    left: 30px;
    top: 30px;
}

.pore-05 {
    top: -18px;
    width: 20px;
    height: 20px;
    right: 35px;
}

.pore-06 {
    width: 20px;
    height: 20px;
    top: 36%;
    left: 25px;
}

.pore-07 {
    width: 20px;
    height: 20px;
    bottom: 56%;
    right: 40px;
}
/*实现眨眼效果*/
@-webkit-keyframes blink { 
    0%, 2%, 60%, 62%, 100% { 
        -webkit-transform: scaleX(1) scaleY(1); 
                transform: scaleX(1) scaleY(1); 
    } 
    1%, 61% { 
        -webkit-transform: scaleX(1.5) scaleY(0.1); 
                transform: scaleX(1.5) scaleY(0.1); 
    } 
  }
  
  @keyframes blink { 
    0%, 2%, 60%, 62%, 100% { 
        -webkit-transform: scaleX(1) scaleY(1); 
                transform: scaleX(1) scaleY(1); 
    } 
    1%, 61% { 
        -webkit-transform: scaleX(1.5) scaleY(0.1); 
                transform: scaleX(1.5) scaleY(0.1); 
    } 
  }
  /*
     至此，一个可爱的海绵宝宝经画好，你是否喜欢呢😇😇😇😇
  */
`
/*js部分*/ 
let n=1
demo.innerText=string.substr(0,n)//页面显示文字
demo2.innerHTML=string.substr(0,n)//显示样式

let time=100
const run=()=>{
    n+=1
    if(n>string.length){
       window.clearInterval(id)
       return 
    }
    demo.innerText=string.substr(0,n)
    demo2.innerHTML=string.substr(0,n)
    demo.scrollTop=demo.scrollHeight
}

   const play=()=>{
       return setInterval(run,time) 
   }
   const pause=()=>{
    window.clearInterval(id)
   }
   let id=play()
   btnPause.onclick=()=>{
       pause()
   }
   btnPlay.onclick=()=>{
    id=play()
   }
   btnSlow.onclick=()=>{
       pause()
       time=300
       id=play()
   }
   btnNormal.onclick=()=>{
       pause()
       time=100
       id=play()
   }
   btnFast.onclick=()=>{
       pause()
       time=0
       id=play()
   }