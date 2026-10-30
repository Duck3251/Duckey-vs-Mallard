// ================================
// Duckey vs Mallard
// Main Menu
// ================================

"use strict";

const menuButtons = [

    {
        name: "Local Co-op",
        x: 440,
        y: 250,
        width: 400,
        height: 70
    },

    {
        name: "Online Co-op",
        x: 440,
        y: 360,
        width: 400,
        height: 70
    }

];

// ================================
// Mouse Click
// ================================

canvas.addEventListener("click", function (event) {

    if (currentScreen !== "menu")
        return;

    const rect = canvas.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    for (const button of menuButtons) {

        if (

            mouseX >= button.x &&
            mouseX <= button.x + button.width &&
            mouseY >= button.y &&
            mouseY <= button.y + button.height

        ) {

            if (button.name === "Local Co-op") {

                console.log("Local Co-op");

                currentScreen = "game";

            }

            if (button.name === "Online Co-op") {

                console.log("Online Co-op");

                alert("Online Co-op coming soon!");

            }

        }

    }

});

// ================================
// Draw Menu
// ================================

function drawMenu() {

    ctx.fillStyle = "#79C8FF";
    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "black";

    ctx.textAlign = "center";

    ctx.font = "60px Arial";

    ctx.fillText(

        "Duckey vs Mallard",

        canvas.width / 2,
        120

    );

    ctx.font = "26px Arial";

    ctx.fillText(

        "Device: " + selectedDevice,

        canvas.width / 2,
        170

    );

    ctx.font = "32px Arial";

    for (const button of menuButtons) {

        ctx.fillStyle = "white";

        ctx.fillRect(

            button.x,
            button.y,

            button.width,
            button.height

        );

        ctx.strokeStyle = "black";

        ctx.strokeRect(

            button.x,
            button.y,

            button.width,
            button.height

        );

        ctx.fillStyle = "black";

        ctx.fillText(

            button.name,

            button.x + button.width / 2,
            button.y + 45

        );

    }

}
