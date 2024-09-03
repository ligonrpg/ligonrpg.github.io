function load(){
    let hasTouchScreen = false;
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if ("maxTouchPoints" in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
    } 

    if (hasTouchScreen && !isMobile) {
        document.getElementById("stylesheet").href = "chromebook.css"
    }

    if (hasTouchScreen && isMobile){
        window.location.href = window.location.href + "mobile"
    }
}

function clicked(id){
    window.location.href = window.location.href + id;
}