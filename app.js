const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const second=document.getElementById("second");

const clock = ()=>{
    let hr=new Date().getHours();
    let mn=new Date().getMinutes();
    let sec=new Date().getSeconds();
 
    hr=hr.toString().padStart(2,"0")
    mn=mn.toString().padStart(2,"0")
    sec=sec.toString().padStart(2,"0")
 
    hour.textContent=hr
    minute.textContent=mn
    second.textContent=sec
 }
 
 setInterval(clock,1000)