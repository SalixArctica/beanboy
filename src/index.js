var video = document.getElementById('jumboVid');
var btn = document.getElementById('btn');
require('./index.html');
require('./index.css');

var parent = document.getElementById('container1');
var child = document.getElementById('container2');
child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";

unmute = () => {
    video.muted = !video.muted
    if(video.muted && btn.classList.contains('fa-volume-up')) {
        btn.classList.add('fa-volume-off');
        btn.classList.remove('fa-volume-up');
    } else {
        btn.classList.remove('fa-volume-off');
        btn.classList.add('fa-volume-up');
    }

}

scrollTo = (place) => {
    let element = document.getElementById(place);
    element.scrollIntoView();
}