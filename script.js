var changeTheme1 = function(){
  document.getElementById("banner").style.backgroundColor = "#ff7e2a";
  document.getElementById("bannerSub").style.backgroundColor = "#ff7e2a";
  document.getElementById("levelUp").style.backgroundColor = "#ff7e2a";
  document.getElementById("week").style.color = "#ff7e2a";
  document.getElementById("theme1").style.borderColor = "#ff7e2a";
  document.getElementById("theme2").style.borderColor = "#ff7e2a";
  document.getElementById("theme3").style.borderColor = "#ff7e2a";
  document.getElementById("theme4").style.borderColor = "#ff7e2a";
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('background.png')";
  document.getElementById("banner").style.color = "#2a2a2a";
  soundChange();
  document.getElementById("videosmoke").style.visibility = "visible";
  document.getElementById("video2").style.visibility = "hidden";
  document.getElementById("video3").style.visibility = "hidden";
  document.getElementById("video4").style.visibility = "hidden";
}

var changeTheme2 = function(){
  document.getElementById("banner").style.backgroundColor = "#2dacff";
  document.getElementById("bannerSub").style.backgroundColor = "#2dacff";
  document.getElementById("levelUp").style.backgroundColor = "#2dacff";
  document.getElementById("week").style.color = "#2dacff";
  document.getElementById("theme1").style.borderColor = "#2dacff";
  document.getElementById("theme2").style.borderColor = "#2dacff";
  document.getElementById("theme3").style.borderColor = "#2dacff";
  document.getElementById("theme4").style.borderColor = "#2dacff";
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('background2.png')";
  document.getElementById("banner").style.color = "lightgrey";
  soundChange();
  document.getElementById("video2").style.visibility = "visible";
  document.getElementById("videosmoke").style.visibility = "hidden";
  document.getElementById("video3").style.visibility = "hidden";
  document.getElementById("video4").style.visibility = "hidden";
}

var changeTheme3 = function(){
  document.getElementById("banner").style.backgroundColor = "#fcff2d";
  document.getElementById("bannerSub").style.backgroundColor = "#fcff2d";
  document.getElementById("levelUp").style.backgroundColor = "#fcff2d";
  document.getElementById("week").style.color = "#fcff2d";
  document.getElementById("theme1").style.borderColor = "#fcff2d";
  document.getElementById("theme2").style.borderColor = "#fcff2d";
  document.getElementById("theme3").style.borderColor = "#fcff2d";
  document.getElementById("theme4").style.borderColor = "#fcff2d";
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('background3.png')";
  document.getElementById("banner").style.color = "#19bbca";
  soundChange();
  document.getElementById("video3").style.visibility = "visible";
  document.getElementById("video2").style.visibility = "hidden";
  document.getElementById("videosmoke").style.visibility = "hidden";
  document.getElementById("video4").style.visibility = "hidden";
}

var changeTheme4 = function(){
  document.getElementById("banner").style.backgroundColor = "#4c4a48";
  document.getElementById("bannerSub").style.backgroundColor = "#4c4a48";
  document.getElementById("levelUp").style.backgroundColor = "#4c4a48";
  document.getElementById("week").style.color = "#4c4a48";
  document.getElementById("theme1").style.borderColor = "#4c4a48";
  document.getElementById("theme2").style.borderColor = "#4c4a48";
  document.getElementById("theme3").style.borderColor = "#4c4a48";
  document.getElementById("theme4").style.borderColor = "#4c4a48";
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('background4.png')";
  document.getElementById("banner").style.color = "#f0bf7a";
  soundChange();
  document.getElementById("video4").style.visibility = "visible";
  document.getElementById("video2").style.visibility = "hidden";
  document.getElementById("video3").style.visibility = "hidden";
  document.getElementById("videosmoke").style.visibility = "hidden";
}

var chooseBG = function(){
  var choice = Math.random();
  if (choice < .25) {
    changeTheme1();
  }
  else if (choice < .50) {
    changeTheme2();
  }
  else if (choice < .75) {
    changeTheme3();
  }
  else {
    changeTheme4();
  }
}

var soundPlay = function(){
  var sTp = document.getElementById("sound");
  sTp.play();
}

var soundChange = function(){
  var sTp = document.getElementById("soundChange");
  sTp.play();
}

var completionPer = 15 ;
var currentPer = 0;
var countUp = function(){
  document.getElementById("completion").innerHTML = "COMPLETION : " + currentPer + "%" ;
  currentPer += 1 ;
  completionDisplay();
}

var completionDisplay = function(){
  chooseBG();
  var completion = completionPer * 0.95 ;
  document.getElementById("levelUp").style.width = completion + "vw";
  if(currentPer < completionPer + 1){
    setTimeout(countUp,5);
  }
}

var themeName;

var changeThemeName = function(themeName){
  document.getElementById("themeTitle").innerHTML = themeName;
  document.getElementById("themeTitle").style.opacity = "1";
  document.getElementById("themeTitle").style.transform = "scaleX(1)";
  soundPlay();
}

var themeHide = function(){
  document.getElementById("themeTitle").style.opacity = "0";
  document.getElementById("themeTitle").style.transform = "scaleX(0)";
  var sTp = document.getElementById("sound");
}
