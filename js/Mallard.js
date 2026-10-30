// ================================
// Duckey vs Mallard
// Mallard
// ================================

"use strict";

const mallard = {

    x: 980,
    y: 360,

    radius: 30,

    speed: 5

};

function updateMallard() {

    if (keys["ArrowUp"])
        mallard.y -= mallard.speed;

    if (keys["ArrowDown"])
        mallard.y += mallard.speed;

    if (keys["ArrowLeft"])
        mallard.x -= mallard.speed;

    if (keys["ArrowRight"])
        mallard.x += mallard.speed;

}

function drawMallard() {

    // Body
    ctx.fillStyle = "#4CAF50";

    ctx.beginPath();

    ctx.arc(

        mallard.x,
        mallard.y,

        mallard.radius,

        0,
        Math.PI * 2

    );

    ctx.fill();

    // Eye
    ctx.fillStyle = "black";

    ctx.beginPath();

    ctx.arc(

        mallard.x + 10,
        mallard.y - 8,

        3,

        0,
        Math.PI * 2

    );

    ctx.fill();

    // Beak
    ctx.fillStyle = "orange";

    ctx.fillRect(

        mallard.x + 22,
        mallard.y - 4,

        12,
        8

    );

}
