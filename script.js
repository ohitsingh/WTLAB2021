var settingmenu = document.querySelector(".settings-menu");
var darkBtn=document.getElementById("dark-btn");

function settingsMenuToggle(){

    settingmenu.classList.toggle("settings-menu-height");



}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");

    }else{
        localStorage.setItem("theme","light");
    }


}

// using local storing in javascript  for sesion work like if we turn on dark theme after refresing the web page it should be in samme status

if (localStorage.getItem("theme")=="light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
    
}else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");

}
else{
    localStorage.setItem("theme","light");
}

// localStorage.setItem("theme","dark");
// localStorage.getItem("theme");