// ================================
// Duckey vs Mallard
// Device Selection
// ================================

"use strict";

console.log("✅ DeviceSelect.js loaded");

// Buttons
const deviceButtons = [

    {
        name: "PC",
        x: 440,
        y: 180,
        width: 400,
        height: 60
    },

    {
        name: "Xbox",
        x: 440,
        y: 270,
        width: 400,
        height: 60
    },

    {
        name: "PlayStation",
        x: 440,
        y: 360,
        width: 400,
        height: 60
    },

    {
        name: "Mobile",
        x: 440,
        y: 450,
        width: 400,
        height: 60
    }

];

// ================================
// Mouse Click
// ================================

canvas.addEventListener("click", function (event) {

    if (currentScreen !== "device")
        return;

    const rect = canvas.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    for (const button of deviceButtons) {

        if (

            mouseX >= button.x &&
            mouseX <= button.x + button.width &&
            mouseY >= button.y &&
            mouseY <= button.y + button.height

        ) {

            selectedDevice = button.name;

            currentScreen = "menu";

            console.log("Device:", selectedDevice);

        }

    }

});

// ================================
// Draw Device Screen
// ================================

function drawDeviceScreen() {

    ctx.fillStyle = "#79C8FF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.font = "50px Arial";
    ctx.textAlign = "center";

    ctx.fillText(
        "What device are you using?",
        canvas.width / 2,
        100
    );

    ctx.font = "32px Arial";

    for (const button of deviceButtons) {

        ctx.fillStyle = "#FFFFFF";

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
            button.y + 40

        );

    }

}
