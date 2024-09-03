function load(){
    let hasTouchScreen = false;
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if ("maxTouchPoints" in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
    } 

    if (hasTouchScreen && !isMobile) {
        document.getElementById("stylesheet").href = "chromebook.css"
        document.getElementById("topheader").innerHTML = document.getElementById("stylesheet").href
    }

    if (hasTouchScreen && isMobile){

    }
}

function clicked(id){
    window.location.href = window.location.href + id;
}