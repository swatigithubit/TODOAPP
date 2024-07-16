let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click", function(){
let item=document.createElement("li");
item.innerText=inp.value;

let deltbtn=document.createElement("button");
deltbtn.innerText="delete";
deltbtn.classList.add("delete");
ul.appendChild(item);
item.appendChild(deltbtn);

inp.value="";
});
ul.addEventListener("click",function( event){
if(event.target.nodeName=="BUTTON"){
    let listitem=event.target.parentElement;
    listitem.remove();
    
}
});