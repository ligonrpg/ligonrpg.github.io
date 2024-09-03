function load(){
    let hasTouchScreen = false;

    if ("maxTouchPoints" in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
    } 

    if (hasTouchScreen) {
        window.location.href = window.location.href + "chromebook"
    }
}




function clicked(id){
    window.location.href = window.location.href + id;
}