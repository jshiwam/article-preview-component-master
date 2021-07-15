let sharebtn = document.querySelector(".share-btn");
let footer = document.querySelector(".footer");
let avatar = document.querySelector(".avatar");
let social = document.querySelector(".social");

let winWidth = window.matchMedia("(min-width:800px)");
avatar.style.display='flex';
social.style.display='none';

let wide;
function displaySocial(winWidth){
   wide=winWidth.matches;
   social.classList.remove("social--expanded");
   avatar.style.display='flex';
   social.style.display='none';
   if(wide){
    if(footer.classList.contains("footer--active")){
        footer.classList.remove("footer--active");
    }   
}
}

displaySocial(winWidth);
winWidth.addListener(displaySocial);

sharebtn.addEventListener("click",function(){
    if(wide){
        social.style.display=social.style.display==='flex'?'none':'flex';
        if(social.style.display==='flex')
            social.classList.add("social--expanded");
        else
            social.classList.remove("social--expanded");
    }else{
    if(avatar.style.display==='none'){
        footer.classList.remove("footer--active");
    }else{
        footer.classList.add("footer--active");
    }

    avatar.style.display=avatar.style.display==='flex'?'none':'flex';
    social.style.display=social.style.display==='flex'?'none':'flex';
    this.classList.toggle("share-btn--active");
}
});
