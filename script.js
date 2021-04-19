let element = document.body;

let canvas = document.createElement('canvas');
canvas.width = 1000;

element.appendChild(canvas);

let context = canvas.getContext('2d');

let rectX = 0;
let rectY = 50;

function animate() {

    context.fillStyle = 0xff0000;

    if (rectX > 900) {
        rectX -= 1;
    }
    if (rectX < 100) {
        rectX += 1;
    }
    context.fillRect(rectX, rectY, 50, 50);
    context.clearRect(rectX, rectY, 50, 50);
    console.log('hello');

    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
window.cancelAnimationFrame(animate);

//Testing comment