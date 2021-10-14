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

let initialPrice = Number(document.querySelector("#total span").textContent);


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
  element.style.fill = colorString;
}

function init() {
  console.log("init");

  //first, check if there is something in the localStorage
  if (localStorage.length > 0) {
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
    let storagedsokkel = localStorage.getItem("sokkel");
    let storagedsides = localStorage.getItem("sides");
    let storagedtiles = localStorage.getItem("tiles");
    let storagedcounter = localStorage.getItem("counter");
    let storagedover = localStorage.getItem("over");
    let storagedunder = localStorage.getItem("under");
    let storagedwall = localStorage.getItem("wall");

    if (storagedwindowOutsite != "") {
      setColor(windowOutsite, storagedwindowOutsite);
    } else {
      setColor(windowOutsite, "#ffffff");
    }
    if (storagedwindowColor != "") {
      setColor(windowColor, storagedwindowColor);
    } else {
      setColor(windowColor, "#ffffff");
    }
    if (flowers != "") {
      setColor(flowers, storagedflowers);
    } else {
      setColor(flowers, "#ffffff");
    }
    if (storagedemhatte != "") {
      setColor(emhatte, storagedemhatte);
    } else {
      setColor(emhatte, "#ffffff");
    }
    if (storagedsink != "") {
      setColor(sink, storagedsink);
    } else {
      setColor(sink, "#ffffff");
    }
    if (storagedoven != "") {
      setColor(oven, storagedoven);
    } else {
      setColor(oven, "#ffffff");
    }
    if (storagedovenDetails != "") {
      setColor(oven_details, storagedovenDetails);
    } else {
      setColor(oven_details, "#ffffff");
    }
    if (storagedpot != "") {
      setColor(pot, storagedpot);
    } else {
      setColor(pot, "#ffffff");
    }
    if (floor != "") {
      setColor(floor, storagedfloor);
    } else {
      setColor(floor, "#ffffff");
    }
    if (storagedsokkel != "") {
      setColor(sokkel, storagedsokkel);
    } else {
      setColor(sokkel, "#ffffff");
    }
    if (storagedsides != "") {
      setColor(sides, storagedsides);
    } else {
      setColor(sides, "#ffffff");
    }
    if (storagedtiles != "") {
      setColor(tiles, storagedtiles);
    } else {
      setColor(tiles, "#ffffff");
    }
    if (storagedcounter != "") {
      setColor(counter, storagedcounter);
    } else {
      setColor(counter, "#ffffff");
    }
    if (storagedover != "") {
      setColor(over, storagedover);
    } else {
      setColor(over, "#ffffff");
    }
    if (storagedunder != "") {
      setColor(under, storagedunder);
    } else {
      setColor(under, "#ffffff");
    }
    if (storagedwall != "") {
        setColor(wall, storagedwall);
    } else {
        setColor(wall, "#ffffff");
    }

    //get addons stored in local storage

  if (localStorage.getItem("board") === "true") {
    let feature = "board";
    let price = document.querySelector(`.addons img[data-feature="${feature}"]`).dataset.price;
    addElement(feature, price);
  }
  if (localStorage.getItem("knife") === "true") {
    let feature = "knife"
    let price = document.querySelector(`.addons img[data-feature="${feature}"]`).dataset.price;
    addElement(feature, price);
  }
  if (localStorage.getItem("oven") === "true") {
    let feature = "oven"
    let price = document.querySelector(`.addons img[data-feature="${feature}"]`).dataset.price;
    addElement(feature, price);
  }
  if (localStorage.getItem("toaster") === "true") {
    let feature = "toaster"
    let price = document.querySelector(`.addons img[data-feature="${feature}"]`).dataset.price;
    addElement(feature, price);
  }
  if (localStorage.getItem("solarfan") === "true") {
    let feature = "solarfan"
    let price = document.querySelector(`.addons img[data-feature="${feature}"]`).dataset.price;
    addElement(feature, price);
  }
  if (localStorage.getItem("handles_cobber") === "true") {
    let feature = "handles_cobber"
    let price = document.querySelector(`.addons img[data-feature="${feature}"]`).dataset.price;
    addElement(feature, price);
  }
  if (localStorage.getItem("handles_steel") === "true") {
    let feature = "handles_steel"
    let price = document.querySelector(`.addons img[data-feature="${feature}"]`).dataset.price;
    addElement(feature, price);
  }
  calculateTotalPrice();
  } 
  

  

  // event listeners

  // 1)select a customized color

  colorPicker.on("color:change", (color) => {
    currentColor = color.hexString;
  });

  //2) add a color to an element in the image

  windowOutsite.addEventListener("click", (event) => {
    setColor(windowOutsite, currentColor);
  });

  wall.addEventListener("click", (event) => {
    setColor(wall, currentColor);
  });

  windowColor.addEventListener("click", (event) => {
    setColor(windowColor, currentColor);
  });

  flowers.addEventListener("click", (event) => {
    setColor(flowers, currentColor);
  });

  emhatte.addEventListener("click", (event) => {
    setColor(emhatte, currentColor);
  });

  floor.addEventListener("click", (event) => {
    setColor(floor, currentColor);
  });

  oven.addEventListener("click", (event) => {
    setColor(oven, currentColor);
  });

  oven_details.addEventListener("click", (event) => {
    setColor(oven_details, currentColor);
  });

  sides.addEventListener("click", (event) => {
    setColor(sides, currentColor);
  });

  sokkel.addEventListener("click", (event) => {
    setColor(sokkel, currentColor);
  });
  tiles.addEventListener("click", (event) => {
    setColor(tiles, currentColor);
  });

  counter.addEventListener("click", (event) => {
    setColor(counter, currentColor);
  });

  over.addEventListener("click", (event) => {
    setColor(over, currentColor);
  });

  under.addEventListener("click", (event) => {
    setColor(under, currentColor);
  });

  sink.addEventListener("click", (event) => {
    setColor(sink, currentColor);
  });

  pot.addEventListener("click", (event) => {
    setColor(pot, currentColor);
  });

  // 3) suggested colors selected
  document.querySelectorAll(".color-selector").forEach((element) => {
    element.addEventListener("click", (event) => {
      currentColor = event.target.style.backgroundColor;
      console.log("color clicked", currentColor);
    });
  });

  // 4) save preferences

  document.querySelector(".button_save").addEventListener("click", saveDesign);

  //5) clear all the options

  document.querySelector(".button_clear").addEventListener("click", resetOptions);

  //6) Add addson

  document.querySelectorAll(".option").forEach((option) => option.addEventListener("click", toggleOption));
}

function toggleOption(event) {
  const target = event.currentTarget;
  const feature = target.dataset.feature;
  const price = Number(target.dataset.price);
 
  console.log(feature, price);
if (feature === "handles_steel"){
  let otherHandle = document.querySelector(`.addons img[data-feature="handles_cobber"]`);
  let otherHandleClassList = otherHandle.classList;
  let handleString = otherHandleClassList.toLocaleString();
  if (handleString.includes("chosen") === true){
    console.log("you can't add the handle");
  }
  else {
    addPiece(feature, target, price)
  }
} else if (feature === "handles_cobber"){
  let otherHandle = document.querySelector(`.addons img[data-feature="handles_steel"]`);
  let otherHandleClassList = otherHandle.classList;
  let handleString = otherHandleClassList.toLocaleString();
  if (handleString.includes("chosen") === true){
    console.log("you can't add the handle");
  } else {
    addPiece(feature, target, price)
  }
} else {
  addPiece(feature, target, price)
  }
}

// Create featureElement to be appended to #selected ul - could have used a <template> instead
function createFeatureElement(feature, price) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = "+";
  div.dataset.feature = feature;
  div.dataset.price = price;
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

function resetOptions() {

  //clean local storage
  localStorage.clear();

  //set colors to initial colors
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
    console.log("remove board");
    let element = "board"
    removeElement(element);
  }
  if (features.knife === true) {
    let element = "knife"
    removeElement(element);
  }
  if (features.oven === true) {
    let element = "oven"
    removeElement(element);
  }
  if (features.toaster === true) {
    let element = "toaster"
    removeElement(element);
  }
  if (features.solarfan === true) {
    let element = "solarfan"
    removeElement(element);
  }
  if (features.handles_cobber === true) {
    let element = "handles_cobber"
    removeElement(element);
  }
  if (features.handles_steel === true) {
    let element = "handles_steel"
    removeElement(element);
  }
  calculateTotalPrice()
}

//add feature to save design

function saveDesign() {
  console.log("saving stuff in local storage");
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
  localStorage.setItem("wall", wall.style.fill);

  if (features.board === true) {
    localStorage.setItem("board", true);
  }
  if (features.knife === true) {
    localStorage.setItem("knife", true);
  }
  if (features.oven === true) {
    localStorage.setItem("oven", true);
  }
  if (features.toaster === true) {
    localStorage.setItem("toaster", true);
  }
  if (features.solarfan === true) {
    localStorage.setItem("solarfan", true);
  }
  if (features.handles_cobber === true) {
    localStorage.setItem("handles_cobber", true);
  }
  if (features.handles_steel === true) {
    localStorage.setItem("handles_steel", true);
  }
}


function addElement(feature, price){
  document.querySelector(`.addons_container img[data-feature="${feature}"]`).classList.remove("hide");
  document.querySelector("#selected ul").appendChild(createFeatureElement(feature, price));
  document.querySelector(`.addons img[data-feature="${feature}"]`).classList.add("chosen");
  features[feature] = true;
};


function removeElement(element){
  console.log("removing element");
  document.querySelector(`.addons_container img[data-feature="${element}"]`).classList.add("hide");
  document.querySelector(`#selected div[data-feature="${element}"]`).remove();
  document.querySelector(`.addons img[data-feature="${element}"]`).classList.remove("chosen");
  features[element] = false;
  calculateTotalPrice()
};

// calculate price

function calculateTotalPrice() {
  let finalPrice = initialPrice

document.querySelectorAll("ul div").forEach((element)=>{
finalPrice = finalPrice + Number(element.dataset.price)
})

document.querySelector("#total span").textContent = finalPrice

}

function addPiece(feature, target, price){
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
    document.querySelector("#selected ul").appendChild(createFeatureElement(feature, price));

    document.querySelector("#total span").textContent = initialPrice + price;
    
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
    calculateTotalPrice()
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

    Promise.all(featureElement.getAnimations().map((animation) => animation.finished)).then(() => featureElement.remove()).then(()=>calculateTotalPrice());
    
  }
}