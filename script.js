"use strict";

// The model of all features
const features = {
    board: false,
    knife: false,
    oven: false,
    toaster: false,
    solarfan: false,
    handles_cobber: false,
    handles_steel: false
  };

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
let colorPicker = new iro.ColorPicker('#picker', {
    width: 50,
    color: "#f00",
    display: "grid",
    borderWidth: 0,
    padding: 1,
});

document.addEventListener("DOMContentLoaded", start);

let currentColor = "rgb(255, 227, 251)";

async function start() {
  let response = await fetch("assets/kokken-02.svg");
  let mySvgData = await response.text();
  document.querySelector(".svg_container").innerHTML = mySvgData;
  startManipulationTheSvg();
}

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

  init();
}

function setColor(element, colorString) {
  console.log("setColor", element);
  console.log(element);
  console.log("colorString", colorString);
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


    
    colorPicker.on("color:change", (color) => {
        currentColor = color.hexString;
      });

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
    });
    document.querySelector(".button_clear").addEventListener("click", () => {
      console.log("clear colors")
    windowOutsite.style.fill = "#ffffff";
    windowColor.style.fill = "#ffffff";
    flowers.style.fill = "#ffffff";
    emhatte.style.fill = "#ffffff";
    sink.style.fill = "#ffffff";
    oven.style.fill = "#ffffff";
    oven_details.style.fill = "#ffffff";
    pot.style.fill = "#ffffff";
    floor.style.fill = "#ffffff";
    sokkel.style.fill = "#ffffff";
    sides.style.fill = "#ffffff";
    tiles.style.fill = "#ffffff";
    counter.style.fill = "#ffffff";
    over.style.fill = "#ffffff";
    under.style.fill = "#ffffff";
    wall.style.fill = "#ffffff";
  });

};
