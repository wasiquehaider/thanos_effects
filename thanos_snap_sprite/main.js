const glove = document.querySelector(".infinity");
const timeglove = document.querySelector(".timeinfinity");
const snapBanner = document.querySelector(".snap");
const timeBanner = document.querySelector(".time");

glove.addEventListener("click", snapDat);
timeglove.addEventListener("click", reverseDat);

function snapDat() {
  glove.className = "hide";
  snapBanner.className = "snap";
  setTimeout(() => {
    glove.className = "infinity";
    snapBanner.className = "hide";
  }, 1500);
}
function reverseDat() {
  timeglove.className = "hide";
  timeBanner.className = "time";
  setTimeout(() => {
    timeglove.className = "timeinfinity";
    timeBanner.className = "hide";
  }, 1500);
}

// SPRITE

// var tID; //we will use this variable to clear the setInterval()
// function stopAnimate() {
//   document.getElementById("image").style.backgroundPosition = "0px 0px";
//   clearInterval(tID);
// } //end of stopAnimate()
// function animateScript() {
//   var position = 34.7; //start position for the image slicer
//   const interval = 100; //100 ms of interval for the setInterval()
//   const diff = 34.7; //diff as a variable for position offset
//   tID = setInterval(() => {
//     document.getElementById(
//       "image"
//     ).style.backgroundPosition = `-${position}px 0px`;
//     //we use the ES6 template literal to insert the variable "position"
//     if (position < 347) {
//       position = position + diff;
//     }
//     //we increment the position by 256 each time
//     else {
//       position = 34.7;
//     }
//     //reset the position to 256px, once position exceeds 1536px
//   }, interval); //end of setInterval
// } //end of animateScript()
