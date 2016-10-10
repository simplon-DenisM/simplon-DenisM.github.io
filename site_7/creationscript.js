//VARIABLES

var imageEl = document.getElementById("imageZone");
var imagePosX = imageEl.offsetLeft;
var imagePosY = imageEl.offsetTop;
var imageWidth = imageEl.offsetWidth;
var imageHeight = imageEl.offsetHeight;

var resizerEl = document.getElementById("imageResizer");
var resizerPosX = resizerEl.offsetLeft;
var resizerPosY = resizerEl.offsetTop;

//FUNCTIONS

function startResizer(){
  resizerEl.style.left = (imagePosX + imageWidth - 10).toString() + "px";
  resizerEl.style.top = (imagePosY + imageHeight - 10).toString() + "px";
}
