let gameseq=[];
let userseq=[];
let started=false;
let max=0;

let btns=["red","green","blue","orange"];

 let level=0;
 let h2=document.querySelector("h2");
 let h3=document.querySelector("h3");

 document.addEventListener("keypress" ,function(){
    if(started==false){
        started=true;
        levelUp();
    }
 
 });

function gameflash(btn){
    btn.classList.add("flash");
         setTimeout(function(){
    btn.classList.remove("flash");
},500);
 }

 function userflash(btn){
    btn.classList.add("userflash");
         setTimeout(function(){
    btn.classList.remove("userflash");
},1000);
 }

function levelUp(){
    level++;
    userseq=[];
    h2.innerText=`Level ${level}`;
    // random
    let randmIndx=Math.floor((Math.random()*3)+1);
    let randmclr=btns[randmIndx];
    let randbtn=document.querySelector(`.${randmclr}`);
  
    gameseq.push(randmclr);
    console.log(gameseq);
    gameflash(randbtn);
 }
 function checkans(indx){
    if(userseq[indx]===gameseq[indx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);
       }
    }
    else{
        if(max<level){
            max=level;
        }
        h2.innerHTML=` Game over !
        <br>your score is <b> ${level} </b> <br>press any key to start!</br> `;
        
        reset()
    }
 }
 function btnpress(){
      let btn=this;
      userflash(btn);
      usercolor=btn.getAttribute("id");
    //   console.log(usercolor);
    userseq.push(usercolor);
    // console.log(userseq);
    checkans(userseq.length-1);
 }
 let allbtns=document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click",btnpress);
 }
 function reset(){
    gameseq=[];
    userseq=[];
    started=false;
    h3.innerText=`your highest score is ${max}`;
    level=0;
 }