//LOCAL VARS

var phoneButton = document.getElementsByClassName("productButton")[0];
var tabletteButton = document.getElementsByClassName("productButton")[1];
var ordiButton = document.getElementsByClassName("productButton")[2];
var macButton = document.getElementsByClassName("productButton")[3];
var container = document.getElementById("pageContainer");
var first = true;
var body = document.getElementsByTagName("body")[0];
var checkBrandContainer;
var checkProductContainer;
var searched = true ;


//FUTURE JSON VALS

var iphone = [
{pname:"iPhone 6" , varname:"iPhone6" , img:"imgs/smartphone_iphone6.png"},
{pname:"iPhone 6S" , varname:"iPhone6S" , img:"imgs/smartphone_iphone6S.jpg"},
{pname:"iPhone 6 Plus" , varname:"iPhone6Plus" , img:"imgs/smartphone_iphone6Plus.png"},
{pname:"iPhone 6S Plus" , varname:"iPhone6SPLus" , img:"imgs/smartphone_iphone6SPlus.png"},
{pname:"iPhone 5" , varname:"iPhone5" , img:"imgs/smartphone_iphone5.png"},
{pname:"iPhone 5C" , varname:"iPhone5C" , img:"imgs/smartphone_iphone5C.png"},
{pname:"iPhone 5S" , varname:"iPhone5S" , img:"imgs/smartphone_iphone5S.png"},
{pname:"iPod Touch 5" , varname:"iPodTouch5" , img:"imgs/smartphone_ipodtouch5.png"},
{pname:"iPhone 4" , varname:"iPhone4" , img:"imgs/smartphone_iphone4S.png"},
{pname:"iPhone 4 S" , varname:"iPhone4S" , img:"imgs/smartphone_iphone4S.png"},
{pname:"iPhone SE" , varname:"iPhoneSE" , img:"imgs/smartphone_iphoneSE.png"}]

var Htc = []

var tablette = [{name:"iPad2" , img:"imgs/tablette_ipad2.jpg"}]

var phoneBrandList = [
{brandName:"Apple"},{brandName:"HTC"},{brandName:"Huawei"},{brandName:"LG"},
{brandName:"Nokia"},{brandName:"Samsung"},{brandName:"Sony"},{brandName:"Wiko"}]

var tabletBrandList = [{brandName:"Tablette Apple"},{brandName:"Tablette Samsung"}]

var pcBrandList = [{brandName:"Fixe"},{brandName:"Portable"}]

var macBrandList = []

//CREATE BRAND LIST

function createBrandContainer(){
  var a = document.createElement("div");
  a.id = "brandContainer";
  body.appendChild(a);
}

function createBrand(brand , i){
  var a = document.createElement("div");
  a.innerText = brand[i].brandName ;
  a.className = "brand";
  a.addEventListener( "click" , function(){
    if (a.innerText == "Apple"){addEventListener("click",createProductList(iphone))}
    else if (a.innerText == "HTC"){addEventListener("click",createProductList(Htc))}
    else if (a.innerText == "Huawei"){addEventListener("click",createProductList(Huawei))}
    else if (a.innerText == "LG"){addEventListener("click",createProductList(Lg))}
    else if (a.innerText == "Nokia"){addEventListener("click",createProductList(Nokia))}
    else if (a.innerText == "Samsung"){addEventListener("click",createProductList(Samsung))}
    else if (a.innerText == "Sony"){addEventListener("click",createProductList(Sony))}
    else if (a.innerText == "Wiko"){addEventListener("click",createProductList(Wiko))}
    else if (a.innerText == "Tablette Apple"){addEventListener("click",createProductList(tabApple))}
    else if (a.innerText == "Tablette Samsung"){addEventListener("click",createProductList(tabSamsung))}
    else if (a.innerText == "Fixe"){addEventListener("click",createProductList(pc))}
    else if (a.innerText == "Portable"){addEventListener("click",createProductList(laptop))}
    else {console.log("");}
  });
  var container = document.getElementById("brandContainer");
  container.appendChild(a);
}

function createBrandList(brand , i){

  if (checkBrandContainer != undefined) {
    removeBrandContainer();
    if (checkProductContainer != undefined){
      removeProductContainer();
      checkProductContainer = undefined;
    }
  }

  if(checkBrandContainer == undefined){
    checkBrandContainer = 1 ;
  }


  createBrandContainer();
  for (var i = 0; i < brand.length; i++) {
    createBrand(brand , i);
  }
}



//CREATE PRODUCT LIST

function createProductContainer() {
  var a = document.createElement("div");
  a.id = "productContainer";
  body.appendChild(a);
}


function createList(product , i){
  var createProductBox = document.createElement("div");
  createProductBox.className = "productSButton";
  createProductBox.innerText = product[i].pname;
  createProductBox.id = product[i].varname;
  var a = document.getElementById("productContainer");
  a.appendChild(createProductBox);
  var createProductImage = document.createElement("img");
  createProductImage.src = product[i].img ;
  createProductBox.appendChild(createProductImage);
}

function createProductList(product , i){
  if (checkProductContainer != undefined) {
    removeProductContainer();
  }

  if(checkProductContainer == undefined){
    checkProductContainer = 1 ;
  }
  createProductContainer();
  for (var i = 0; i < product.length; i++) {
    createList(product , i );
  }
}

//SEARCH FUNCTION
function removeSearch(){
  if(searched == true){
    document.getElementById("searchbox").value = " ";
    searched = false ;
  }
}

function search(){
  var searchTerm = document.getElementById("searchbox").value;

  for (var i = 0; i <= iphone.length; i++) {
    var searchResult2 = iphone[i].varname;
    if ( searchTerm == searchResult2 ) {
      console.log("Found one !");
    }
  }
}


//REMOVE  CONTAINER

function removeBrandContainer(){
  var toRemove = document.getElementById("brandContainer");
  toRemove.parentNode.removeChild(toRemove);
}

function removeProductContainer(){
  var toRemove = document.getElementById("productContainer");
  toRemove.parentNode.removeChild(toRemove);
}
