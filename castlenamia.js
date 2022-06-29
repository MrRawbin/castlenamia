'use strict';

var isLegible = false;

var prefix = [
    "Rondo",
    "Symphony",
    "Legacy",
    "Aria",
    "Lament",
    "Dawn",
    "Portrait",
    "Order",
    "Lords",
    "Encore",
    "Harmony",
    "Concert",
    "Mirror",
    "Sonata",
    "Waltz",
    "Nocturne",
    "Litany",
    "Requiem",
    "Dirge",
    "Chorus",
    "Prelude",
    "Ritual",
    "Melody",
    "Minuet",
    "Overture",
    "Circle",
    "Ballade",
    "Veil",
    "Dusk",
    "Crescent",
];

var suffix = [
    "Blood",
    "the Night",
    "Darkness",
    "Dissonance",
    "Sorrow",
    "Darkness",
    "Ruin",
    "Shadow",
    "Fate",
    "Regret",
    "Virtue",
    "Despair",
    "the Condemned",
    "Moonlight",
    "Piety",
    "Tranquility",
    "Devotion",
    "Perdition",
    "Blasphemy",
    "Desire",
    "Death",
    "the Dark",
    "Agony",
    "the Moon",
];

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function toggleLegibility() {
    isLegible = !isLegible;

    var root = document.documentElement;
    var fontFamily = isLegible ? "roboto, sans-serif" : "fette-unz-fraktur, serif";
    root.style.setProperty("--font-family", fontFamily);
}


function generateName() {
    document.querySelector("h2").innerText = randomItem(prefix) + " of " + randomItem(suffix);
}

document.addEventListener("DOMContentLoaded", function () {
    generateName();

    var toggleLegibilityButton = document.querySelector("#toggle-legibility");
    toggleLegibilityButton.addEventListener("click", toggleLegibility);

    var reRollButton = document.querySelector("#reroll");
    reRollButton.addEventListener("click", generateName);
});