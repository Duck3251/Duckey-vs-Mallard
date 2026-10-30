// ================================
// Duckey vs Mallard
// Duckey
// ================================

"use strict";

const duckey = {

    x: 300,
    y: 360,

    radius: 30,

    speed: 5

};

function updateDuckey() {

    if (keys["w"])
        duckey.y -= duckey.speed;

    if (keys["s"])
        duckey.y += duckey.speed;

    if (keys["a"])
        duckey.x -= duckey.speed;

    if (keys["d"])
        duckey.x += duckey.speed;

}

function drawDuckey() {

    // Body
    ctx.fillStyle = "yellow";

    ctx.beginPath();

    ctx.arc(

        duckey.x,
        duckey.y,

        duckey.radius,

        0,
        Math.PI * 2

    );

    ctx.fill();

    // Eye
    ctx.fillStyle = "black";

    ctx.beginPath();

    ctx.arc(

        duckey.x + 10,
        duckey.y - 8,

        3,

        0,
        Math.PI * 2

    );

    ctx.fill();

    // Beak
    ctx.fillStyle = "orange";

    ctx.fillRect(

        duckey.x + 22,
        duckey.y - 4,

        12,
        8

    );

}
