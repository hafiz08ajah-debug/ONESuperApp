/* ====================================
   ONE SuperApp Script V1
==================================== */

console.log("🚀 ONE SuperApp Loaded");

/* ------------------------
   Login Button
------------------------ */

const loginBtn = document.querySelector(".login");

if(loginBtn){

loginBtn.addEventListener("click",()=>{

alert("Halaman Login akan segera tersedia.");

});

}

/* ------------------------
   Register Button
------------------------ */

const registerBtn = document.querySelector(".register");

if(registerBtn){

registerBtn.addEventListener("click",()=>{

alert("Halaman Register akan segera tersedia.");

});

}

/* ------------------------
   Menu Mobile
------------------------ */

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if(menu){

menu.addEventListener("click",()=>{

if(nav.style.display==="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";
nav.style.flexDirection="column";
nav.style.position="absolute";
nav.style.top="80px";
nav.style.right="20px";
nav.style.background="#1e293b";
nav.style.padding="20px";
nav.style.borderRadius="15px";

}

});

}

/* ------------------------
   Smooth Scroll
------------------------ */

document.querySelectorAll
