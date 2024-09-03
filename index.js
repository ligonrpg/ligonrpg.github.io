function load(){
    let hasTouchScreen = false;
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    document.getElementById('topheader').innerHTML = "t1"

    if ("maxTouchPoints" in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
    } 

    if (hasTouchScreen && !isMobile) {
        let stylesheet = document.getElementById('stylesheet');
        stylesheet.setAttribute('href', 'chromebook.css')
        document.getElementById('topheader').setAttribute('innerHTML', "hello");
        document.getElementById('topheader').innerHTML = "t";
    }

    if (hasTouchScreen && isMobile){

    }
}

function clicked(id){
    window.location.href = window.location.href + id;
}