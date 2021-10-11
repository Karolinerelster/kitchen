"use strict";

let windowOutsite;
let windowColor;
let flowers;
let emhatte;
let sink;
let oven;
let oven_details;
let pot;
let floor;
let sokkel;
let sides;
let tiles;
let counter;
let over;
let under;
let wall;





document.addEventListener("DOMContentLoaded", start);


let currentColor = "rgb(255, 227, 251)";


async function start(){
    let response = await fetch("assets/kokken-02.svg");
    let mySvgData = await response.text();
    document.querySelector("section").innerHTML = mySvgData;
    startManipulationTheSvg();
};


function startManipulationTheSvg() {
    windowOutsite = document.querySelector("#window_outsite");
    windowColor = document.querySelector("#window");
    flowers = document.querySelector("#flowers");
    emhatte = document.querySelector("#emhatte");
    sink = document.querySelector("#sink");
    oven = document.querySelector("#oven");
    oven_details = document.querySelector("#oven_details");
    pot = document.querySelector("#pot");
    floor = document.querySelector("#floor");
    sokkel = document.querySelector("#sokkel");
    sides = document.querySelector("#sides");
    tiles = document.querySelector("#tiles");
    counter = document.querySelector("#counter");
    over = document.querySelector("#over");
    under = document.querySelector("#under");
    wall = document.querySelector("#wall");


    console.log("#window_outsite", windowOutsite);
    console.log("#window", windowColor);
    console.log("#flowers", flowers);
    console.log("#emhatte", emhatte);
    console.log("#sink", sink);
    console.log("#oven", oven);
    console.log("#oven_details", oven_details);
    console.log("#pot", pot);
    console.log("#floor", floor);
    console.log("#sokkel", sokkel);
    console.log("#sides", sides);
    console.log("#tiles", tiles);
    console.log("#counter", counter);
    console.log("#over", over);
    console.log("#under", under);
    console.log("#wall", wall);

    console.log("startManipulationTheSvg");
    init();
}


function setColor(element, colorString) {
    console.log("setColor", element);
    console.log(element);
    console.log("colorString",colorString);
    element.style.fill = colorString;
}


function init() {
    console.log("init");
    setColor(windowOutsite, "#ffffff");
    setColor(windowColor, "#ffffff");
    setColor(flowers, "#ffffff");
    setColor(emhatte, "#ffffff");
    setColor(sink, "#ffffff");
    setColor(oven, "#ffffff");
    setColor(oven_details, "#ffffff");
    setColor(pot, "#ffffff");
    setColor(floor, "#ffffff");
    setColor(sokkel, "#ffffff");
    setColor(sides, "#ffffff");
    setColor(tiles, "#ffffff");
    setColor(counter, "#ffffff");
    setColor(over, "#ffffff");
    setColor(under, "#ffffff");
    setColor(wall, "#ffffff");




    windowOutsite.addEventListener("click", (event) => {
        setColor(windowOutsite, currentColor);
        console.log(event.target);

    })

    wall.addEventListener("click", (event) => {
        setColor(wall, currentColor);
        console.log(event.target);

    })


    windowColor.addEventListener("click", (event) => {
        setColor(windowColor, currentColor);
        console.log(event.target);

    })

    flowers.addEventListener("click", (event) => {
        setColor(flowers, currentColor);
        console.log(event.target);

    })

    emhatte.addEventListener("click", (event) => {
        setColor(emhatte, currentColor);
        console.log(event.target);

    })

    floor.addEventListener("click", (event) => {
        setColor(floor, currentColor);
        console.log(event.target);

    })

    oven.addEventListener("click", (event) => {
        setColor(oven, currentColor);
        console.log(event.target);

    })

    oven_details.addEventListener("click", (event) => {
        setColor(oven_details, currentColor);
        console.log(event.target);

    })

    sides.addEventListener("click", (event) => {
        setColor(sides, currentColor);
        console.log(event.target);

    }) 
    
    sokkel.addEventListener("click", (event) => {
        setColor(sokkel, currentColor);
        console.log(event.target);

    }) 
    tiles.addEventListener("click", (event) => {
        setColor(tiles, currentColor);
        console.log(event.target);

    })
    
    counter.addEventListener("click", (event) => {
        setColor(counter, currentColor);
        console.log(event.target);

    })

    over.addEventListener("click", (event) => {
        setColor(over, currentColor);
        console.log(event.target);

    })
    
    under.addEventListener("click", (event) => {
        setColor(under, currentColor);
        console.log(event.target);

    })

    sink.addEventListener("click", (event) => {
        setColor(sink, currentColor);
        console.log(event.target);

    })
    
    pot.addEventListener("click", (event) => {
        setColor(pot, currentColor);
        console.log(event.target);

    })
    document.querySelectorAll(".color-selector").forEach(element => {
        element.addEventListener("click", event => {
            currentColor = event.target.style.backgroundColor;
            console.log("color clicked", currentColor);
        })
    })

};