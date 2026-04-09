let canvas = document.getElementById(canvas);
canvas.getContext("2d");

canvas.clientWidth(800);
canvas.clientHeight(800);

const isDrawing = false;
canvas.onmousedown(isDrawing = true);

if (isDrawing == true) {
    canvas.onmousemove();
}

canvas.onmouseup(isDrawing = false);

let clear = document.getElementById(clear);
clearRect(0, 0, canvas.clientWidth(800), canvas.clientHeight(800)).onclick;
