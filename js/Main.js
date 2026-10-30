// ================================
// Duckey vs Mallard
// Main Game File
// ================================

"use strict";

console.log("🦆 Duckey vs Mallard started!");

// ================================
// Update
// ================================

function update() {

    if (currentScreen === "game") {

        updateDuckey();
        updateMallard();

    }

}

// ================================
// Draw
// ================================

function draw() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    if (currentScreen === "device") {

        drawDeviceScreen();
        return;

    }

    if (currentScreen === "menu") {

        drawMenu();
        return;

    }

    if (currentScreen === "game") {

        // Background
        ctx.fillStyle = "#6CCB5F";

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        drawDuckey();
        drawMallard();

    }

}

// ================================
// Game Loop
// ================================

function gameLoop() {

    update();

    draw();

    requestAnimationFrame(gameLoop);

}

// ================================
// Start Game
// ================================

gameLoop();
