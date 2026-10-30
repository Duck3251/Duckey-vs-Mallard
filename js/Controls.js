// ================================
// Duckey vs Mallard
// Controls
// ================================

"use strict";

const keys = {};

document.addEventListener("keydown", (event) => {

    keys[event.key] = true;

});

document.addEventListener("keyup", (event) => {

    keys[event.key] = false;

});

console.log("✅ Controls loaded");
