const toggle=document.querySelector(".toggle")
const navbar=document.querySelector(".naver-menu");
const icon=document.querySelector(".fa-solid");

toggle.addEventListener("click", function(){
    navber.classList.toggle("active");
    icon.classList.toggle("fa-xmark");
})

const nav = document.querySelector("nav");
const up = document.querySelector("#up");

window.addEventListener("scroll", function(){
    if(this.window.scroll >= 650){
        nav.style.backgroundColor= "#ddd";
    }else{
        nav.style.backgroundColor= "";
      
    }
window.scrollY >=850 ? up.classList.add("active") : up.classList.remove("active");

})

up.onclick=() =>{
    window.scrollTo({
        behavior: "smooth",
        top:0,
    });
}