//NAVBAR NAVIGATION

var gallerySel = document.getElementsByTagName("p")[0];
var aboutSel = document.getElementsByTagName("p")[1];
var devlogSel = document.getElementsByTagName("p")[2];
var selSel = document.getElementById("selector");


function selectGallery(){
  var galleryWidth = gallerySel.offsetWidth.toString() + "px" ;
  var galleryPos = gallerySel.offsetLeft.toString() + "px" ;
selSel.style.width = galleryWidth ;
selSel.style.left = galleryPos;
$("#galleryPage").show(300);
$("#aboutPage").hide(300);
$("#devlogPage").hide(300);
}

function selectAbout(){
  var aboutWidth = aboutSel.offsetWidth.toString() + "px" ;
  var aboutPos = aboutSel.offsetLeft.toString() + "px" ;
selSel.style.width = aboutWidth ;
selSel.style.left = aboutPos;
$("#galleryPage").hide(300);
$("#aboutPage").show(300);
$("#devlogPage").hide(300);
}

function selectDevlog(){
  var devlogWidth = devlogSel.offsetWidth.toString() + "px" ;
  var devlogPos = devlogSel.offsetLeft.toString() + "px" ;
selSel.style.width = devlogWidth ;
selSel.style.left = devlogPos;
$("#galleryPage").hide(300);
$("#aboutPage").hide(300);
$("#devlogPage").show(300);
}


//CREATE NEW ARTIST

var artistList = [{artist:"Feng Zhu " , img:"images/fengzhu.png"},
                  {artist:"Scott Robertson " , img:"images/scottrob.png"},
                  {artist:"Ian Mcque" , img:"images/ianmcque.png"},
                  {artist:"Ben Mauro" , img:"images/benmauro.png"}];



function createArtist(i){
  var createPage = document.createElement("div");
  createPage.className = "artist";
  createPage.style.backgroundImage = "url("+artistList[i].img+")";
  createPage.innerText = artistList[i].artist.toUpperCase() ;
  var page1Sel = document.getElementsByClassName("pageContainer")[0];
  page1Sel.appendChild(createPage);
}

for (var i = 0 ; i <= artistList.length -1; i++) {
  createArtist(i);
}

//CHECK PAGE LOCATION


function checkPage() {
  var pageLocation = window.location.hash ;
  $("#galleryPage").hide(0);
  $("#aboutPage").hide(0);
  $("#devlogPage").hide(0);
  if (pageLocation == "#about"){
    selectAbout();
    console.log("something");
  }
  else if (pageLocation == "#devlog") {
    selectDevlog();
  }
  else {
    selectGallery();
  }
}
