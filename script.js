"use strict";

// The model of all features
const features = {
  board: false,
  knife: false,
  oven: false,
  toaster: false,
  solarfan: false,
  handles_cobber: false,
  handles_steel: false,
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
let colorPicker = new iro.ColorPicker("#picker", {
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

  //first, check if there is something in the localStorage
  if(localStorage.length >0){
    console.log("local storage is", localStorage);
    let storagedwindowOutsite = localStorage.getItem("windowOutsite");
  let storagedwindowColor = localStorage.getItem("windowColor");
  let storagedflowers = localStorage.getItem("flowers");
  let storagedemhatte = localStorage.getItem("emhatte");
  let storagedsink = localStorage.getItem("sink");
  let storagedoven = localStorage.getItem("oven");
  let storagedovenDetails = localStorage.getItem("ovenDetails");
  let storagedpot = localStorage.getItem("pot");
  let storagedfloor = localStorage.getItem("floor");
 let  storagedsokkel = localStorage.getItem("sokkel");
 let  storagedsides = localStorage.getItem("sides");
 let  storagedtiles = localStorage.getItem("tiles");
  let storagedcounter = localStorage.getItem("counter");
 let  storagedover = localStorage.getItem("over");
  let storagedunder = localStorage.getItem("under");
  if (storagedwindowOutsite != ""){setColor(windowOutsite, storagedwindowOutsite)}
  else {setColor(windowOutsite, "#ffffff")};
  if (storagedwindowColor != ""){setColor(windowColor, storagedwindowColor)}
else {setColor(windowColor, "#ffffff")};
  if (flowers != ""){setColor(flowers, storagedflowers)}
 else {setColor(flowers, "#ffffff")};
  if (storagedemhatte != ""){setColor(emhatte, storagedemhatte)}
 else {setColor(emhatte, "#ffffff")};
  if (storagedsink != ""){setColor(sink, storagedsink)}
 else {setColor(sink, "#ffffff")};
  if (storagedoven != ""){setColor(oven, storagedoven)}
  else {setColor(oven, "#ffffff")};
  if (storagedovenDetails != ""){setColor(oven_details, storagedovenDetails)}
  else {setColor(oven_details, "#ffffff")};
  if (storagedpot != ""){setColor(pot, storagedpot)}
  else {setColor(pot, "#ffffff")};
  if (floor != ""){setColor(floor, storagedfloor)}
 else {setColor(floor, "#ffffff")};
  if (storagedsokkel != ""){setColor(sokkel, storagedsokkel)}
 else {setColor(sokkel, "#ffffff")};
  if (storagedsides != ""){setColor(sides, storagedsides)}
  else {setColor(sides, "#ffffff")};
  if (storagedtiles!= ""){setColor(tiles, storagedtiles)}
  else {setColor(tiles, "#ffffff")};
  if (storagedcounter != ""){setColor(counter, storagedcounter)}
  else {setColor(counter, "#ffffff")};
  if (storagedover != ""){setColor(over, storagedover)}
  else {setColor(over, "#ffffff")};
  if (storagedunder != ""){setColor(under, storagedunder)}
  else {setColor(under, "#ffffff")}
  }  /* else{
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
  setColor(wall, "#ffffff");} */

  // event listeners

  //select a customized color

  colorPicker.on("color:change", (color) => {
    currentColor = color.hexString;
  });

  //add a color to an element in the image

  windowOutsite.addEventListener("click", (event) => {
    setColor(windowOutsite, currentColor);
    console.log(event.target);
  });

  wall.addEventListener("click", (event) => {
    setColor(wall, currentColor);
    console.log(event.target);
  });

  windowColor.addEventListener("click", (event) => {
    setColor(windowColor, currentColor);
    console.log(event.target);
  });

  flowers.addEventListener("click", (event) => {
    setColor(flowers, currentColor);
    console.log(event.target);
  });

  emhatte.addEventListener("click", (event) => {
    setColor(emhatte, currentColor);
    console.log(event.target);
  });

  floor.addEventListener("click", (event) => {
    setColor(floor, currentColor);
    console.log(event.target);
  });

  oven.addEventListener("click", (event) => {
    setColor(oven, currentColor);
    console.log(event.target);
  });

  oven_details.addEventListener("click", (event) => {
    setColor(oven_details, currentColor);
    console.log(event.target);
  });

  sides.addEventListener("click", (event) => {
    setColor(sides, currentColor);
    console.log(event.target);
  });

  sokkel.addEventListener("click", (event) => {
    setColor(sokkel, currentColor);
    console.log(event.target);
  });
  tiles.addEventListener("click", (event) => {
    setColor(tiles, currentColor);
    console.log(event.target);
  });

  counter.addEventListener("click", (event) => {
    setColor(counter, currentColor);
    console.log(event.target);
  });

  over.addEventListener("click", (event) => {
    setColor(over, currentColor);
    console.log(event.target);
  });

  under.addEventListener("click", (event) => {
    setColor(under, currentColor);
    console.log(event.target);
  });

  sink.addEventListener("click", (event) => {
    setColor(sink, currentColor);
    console.log(event.target);
  });

  pot.addEventListener("click", (event) => {
    setColor(pot, currentColor);
    console.log(event.target);
  });

  // suggested colors selected
  document.querySelectorAll(".color-selector").forEach((element) => {
    element.addEventListener("click", (event) => {
      currentColor = event.target.style.backgroundColor;
      console.log("color clicked", currentColor);
    });
  });

  // save preferences

  document.querySelector(".button_save").addEventListener("click", saveDesign);

  //get to the initial stage

  document.querySelector(".button_clear").addEventListener("click", resetOptions);



  // Add addson

  document.querySelectorAll(".option").forEach((option) => option.addEventListener("click", toggleOption));
}

function toggleOption(event) {
  const target = event.currentTarget;
  const feature = target.dataset.feature;
  console.log(feature);
  
  // Toggle feature in "model" 
  features[feature] = !features[feature];
  
  // If feature is turned on:
  // - mark target as chosen (add class "chosen")
  // - un-hide the feature-layer(s) in the #product-preview;
  // - create featureElement and append to #selected ul
  // - create FLIP-animation to animate featureElement from img in target, to
  //   its intended position. Do it with normal animation or transition class!

  if (features[feature]) {
    // feature added
    
    console.log(`Feature ${feature} is turned on!`);
    
    target.classList.add("chosen");
    document.querySelector(`.addons_container img[data-feature="${feature}"]`).classList.remove("hide");
    document.querySelector("#selected ul").appendChild(createFeatureElement(feature));
    const firstFrame = document.querySelector(`.addons img[data-feature="${feature}"]`).getBoundingClientRect();
    const lastFrame = document.querySelector(`div[data-feature="${feature}"]`).getBoundingClientRect();
    const deltaX = firstFrame.left - lastFrame.left;
    const deltaY = firstFrame.top - lastFrame.top;
    const deltaWidth = firstFrame.width / lastFrame.width;
    const deltaHeight = firstFrame.height / lastFrame.height;

    document.querySelector(`div[data-feature="${feature}"]`).animate(
      [
        { transformOrigin: "top left", transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaWidth}, ${deltaHeight})` },
        { tranformOrigin: "top left", transform: "none" },
      ],
      { duration: 200, easing: "ease-in-out" }
    );
  }
  // Else - if the feature (became) turned off:
  // - no longer mark target as chosen
  // - hide the feature-layer(s) in the #product-preview
  // - find the existing featureElement in #selected ul
  // - create FLIP-animation to animate featureElement to img in target
  // - when animation is complete, remove featureElement from the DOM
  else {
    // feature removed
    console.log(`Feature ${feature} is turned off!`);
    document.querySelector(`.addons_container img[data-feature="${feature}"]`).classList.add("hide");
    target.classList.remove("chosen");
    const featureElement = document.querySelector(`#selected div[data-feature="${feature}"]`);
    const firstFrame = document.querySelector(`.addons img[data-feature="${feature}"]`).getBoundingClientRect();
    const lastFrame = featureElement.getBoundingClientRect();
    const deltaX = firstFrame.left - lastFrame.left;
    const deltaY = lastFrame.top - firstFrame.top;
    const deltaWidth = firstFrame.width / lastFrame.width;
    const deltaHeight = firstFrame.height / lastFrame.height;

    featureElement.animate([{ transformOrigin: "top left", transform: `translate(${deltaX}px, -${deltaY}px) scale(${deltaWidth}, ${deltaHeight})` }], { duration: 200, easing: "ease-in-out" });

    Promise.all(featureElement.getAnimations().map((animation) => animation.finished)).then(() => featureElement.remove());

    
  }
}

// Create featureElement to be appended to #selected ul - could have used a <template> instead
function createFeatureElement(feature) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = "+";
  div.dataset.feature = feature;
  div.classList.add("selected_option");

  const img = document.createElement("img");
  if (feature === "knife") {
    img.src = `assets/knifes.png`;
  }
  img.src = `assets/${feature}.png`;
  img.alt = capitalize(feature);

  div.append(img);
  div.after(p);

  return div;
}

function capitalize(text) {
  return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
}


function resetOptions(){
  console.log("clear choices");
  localStorage.clear();
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

  if (features.board === true) {
      console.log("remove board")
  }
  if (features.knife === true) {
  }
  if (features.oven === true) {
  }
  if (features.toaster === true) {
  }
  if (features.solarfan === true) {
  }
  if (features.handles_cobber === true) {
  }
  if (features.handles_steel === true) {
  }
}

//add feature to save design

function saveDesign(){
  console.log("saving stuff in local storage")
  localStorage.setItem("windowOutsite", windowOutsite.style.fill);
  localStorage.setItem("windowColor", windowColor.style.fill);
  localStorage.setItem("flowers", flowers.style.fill);
  localStorage.setItem("emhatte", emhatte.style.fill);
  localStorage.setItem("sink", sink.style.fill);
  localStorage.setItem("oven", oven.style.fill);
  localStorage.setItem("ovenDetails", oven_details.style.fill);
  localStorage.setItem("pot", pot.style.fill);
  localStorage.setItem("floor", floor.style.fill);
  localStorage.setItem("sokkel", sokkel.style.fill);
  localStorage.setItem("sides", sides.style.fill);
  localStorage.setItem("tiles", tiles.style.fill);
  localStorage.setItem("counter", counter.style.fill);
  localStorage.setItem("over", over.style.fill);
  localStorage.setItem("under", under.style.fill);
}
