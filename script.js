var slide = document.getElementById('slide');
var container = document.querySelector('.container');

function handleMove(e) {
    var containerRect = container.getBoundingClientRect();
    var x = e.clientX - containerRect.left;

    // Calculate width as a percentage of container width
    var widthPercent = (x / containerRect.width) * 100;

    // Keep width within 0% to 100%
    if (widthPercent < 0) {
        widthPercent = 0;
    } else if (widthPercent > 100) {
        widthPercent = 100;
    }

    slide.style.width = widthPercent + '%';
}

window.onmousemove = handleMove;
window.ontouchmove = handleMove;
