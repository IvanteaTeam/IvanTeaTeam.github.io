var canv = document.getElementsByClassName('game_window')[0].getElementsByTagName('canvas')[0];

var ctx = canv.getContext('2d');


canv.width = 600;
canv.height = 300;
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canv.width, canv.height);
ctx.fillStyle = "#fff";
ctx.fillRect(225, 125, 150, 50);
ctx.fillStyle = "#000";
ctx.font = "30px Arial";
ctx.fillText("Играть", 250, 160);


window.onmousemove = function (event) {
    var x = event.clientX - canv.offsetLeft,
        y = event.clientY - canv.offsetTop + window.scrollY;
    if (x >= 225 && x <= 375 && y >= 125 && y <= 175) {
        canv.style.cursor = "pointer";
    } else {
        canv.style.cursor = "default";
    }
}
window.onmousedown = function (event) {
    var x = event.clientX - canv.offsetLeft,
        y = event.clientY - canv.offsetTop + window.scrollY;
    if (x >= 225 && x <= 375 && y >= 125 && y <= 175) {
        alert("Упс! Игра недоступна!");
    }
};
