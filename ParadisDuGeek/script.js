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
var repairPanel = document.getElementById("repairPanel");
var productView = document.getElementById("productView");
var searchbox = document.getElementById("searchbox");



//FUTURE JSON VALS

var iphone = [
{pname:"iPhone 6" , varname:"smartphone_iPhone6" , img:"imgs/smartphone_iphone6.png"},
{pname:"iPhone 6S" , varname:"smartphone_iPhone6S" , img:"imgs/smartphone_iphone6S.png"},
{pname:"iPhone 6 Plus" , varname:"smartphone_iPhone6Plus" , img:"imgs/smartphone_iphone6Plus.png"},
{pname:"iPhone 6S Plus" , varname:"smartphone_iPhone6SPLus" , img:"imgs/smartphone_iphone6SPlus.png"},
{pname:"iPhone 5" , varname:"smartphone_iPhone5" , img:"imgs/smartphone_iphone5.png"},
{pname:"iPhone 5C" , varname:"smartphone_iPhone5C" , img:"imgs/smartphone_iphone5C.png"},
{pname:"iPhone 5S" , varname:"smartphone_iPhone5S" , img:"imgs/smartphone_iphone5S.png"},
{pname:"iPod Touch 5" , varname:"smartphone_iPodTouch5" , img:"imgs/smartphone_ipodtouch5.png"},
{pname:"iPhone 4" , varname:"smartphone_iPhone4" , img:"imgs/smartphone_iphone4S.png"},
{pname:"iPhone 4 S" , varname:"smartphone_iPhone4S" , img:"imgs/smartphone_iphone4S.png"},
{pname:"iPhone SE" , varname:"smartphone_iPhoneSE" , img:"imgs/smartphone_iphoneSE.png"}]

var Huawei = [
  {pname:"Huawei P9" , varname:"smartphone_huaweip9" , img:"imgs/smartphone_huaweip9.png"},
  {pname:"Huawei P8 Lite" , varname:"smartphone_huaweip8lite" , img:"imgs/smartphone_huaweip8lite.png"},
  {pname:"Huawei P8" , varname:"smartphone_huaweip8" , img:"imgs/smartphone_huaweip8.png"},
  {pname:"Huawei P7" , varname:"smartphone_huaweip7" , img:"imgs/smartphone_huaweip7.png"},
]

var Lg = [
  {pname:"LG Nexus 5" , varname:"smartphone_lgnexus5" , img:"imgs/smartphone_lgnexus5.png"},
  {pname:"LG Nexus 4" , varname:"smartphone_lgnexus4" , img:"imgs/smartphone_lgnexus4.png"},
  {pname:"LG Optimus G4" , varname:"smartphone_lgoptimus4" , img:"imgs/smartphone_lgoptimusg4.png"},
  {pname:"LG Optimus G3" , varname:"smartphone_lgoptimusg3" , img:"imgs/smartphone_lgoptimusg3.png"},
  {pname:"LG Optimus G2" , varname:"smartphone_lgoptimusg2" , img:"imgs/smartphone_lgoptimusg2.png"},
  {pname:"LG Optimus G" , varname:"smartphone_lgoptimusg" , img:"imgs/smartphone_lgoptimusg.png"},
  {pname:"LG Optimus L9" , varname:"smartphone_lgoptimusl9" , img:"imgs/smartphone_lgoptimusl9.png"},
  {pname:"LG Optimus L7" , varname:"smartphone_lgoptimusl7" , img:"imgs/smartphone_lgoptimusl7.png"},
  {pname:"LG Optimus L7 ll" , varname:"smartphone_lgoptimusl7ll" , img:"imgs/smartphone_lgoptimusl7ll.png"},
  {pname:"LG Optimus L5" , varname:"smartphone_lgoptimusl5" , img:"imgs/smartphone_lgoptimusl5.png"},
  {pname:"LG Optimus Black" , varname:"smartphone_lgoptimusblack" , img:"imgs/smartphone_lgoptimusblack.png"},
]


var Samsung = [
  {pname:"Samsung Galaxy S7" , varname:"smartphone_samsunggalaxys7" , img:"imgs/smartphone_samsunggalaxys7.png"},
  {pname:"Samsung Galaxy S7 Edge" , varname:"smartphone_samsunggalaxys7edge" , img:"imgs/smartphone_samsunggalaxys7edge.png"},
  {pname:"Samsung Galaxy S6" , varname:"smartphone_samsunggalaxys6" , img:"imgs/smartphone_samsunggalaxys6.png"},
  {pname:"Samsung Galaxy S6 Edge" , varname:"smartphone_samsunggalaxys6edge" , img:"imgs/smartphone_samsunggalaxys6edge.png"},
  {pname:"Samsung Galaxy S5" , varname:"smartphone_samsunggalaxys5" , img:"imgs/smartphone_samsunggalaxys5.png"},
  {pname:"Samsung Galaxy S5 Mini" , varname:"smartphone_samsunggalaxys5mini" , img:"imgs/smartphone_samsunggalaxys5mini.png"},
  {pname:"Samsung Galaxy S4" , varname:"smartphone_samsunggalaxys4" , img:"imgs/smartphone_samsunggalaxys4.png"},
  {pname:"Samsung Galaxy S4 Mini" , varname:"smartphone_samsunggalaxys4mini" , img:"imgs/smartphone_samsunggalaxys4mini.png"},
  {pname:"Samsung Galaxy S4 Active" , varname:"smartphone_samsunggalaxys4active" , img:"imgs/smartphone_samsunggalaxys4active.png"},
  {pname:"Samsung Galaxy Note 3" , varname:"smartphone_samsunggalaxynote3" , img:"imgs/smartphone_samsunggalaxynote3.png"},
  {pname:"Samsung Galaxy Note 4" , varname:"smartphone_samsunggalaxynote4" , img:"imgs/smartphone_samsunggalaxynote4.png"},
  {pname:"Samsung Galaxy Note 5" , varname:"smartphone_samsunggalaxynote5" , img:"imgs/smartphone_samsunggalaxynote5.png"},
  {pname:"Samsung Galaxy Ace" , varname:"smartphone_samsunggalaxyace" , img:"imgs/smartphone_samsunggalaxyace.png"},
  {pname:"Samsung Galaxy Ace 2" , varname:"smartphone_samsunggalaxyace2" , img:"imgs/smartphone_samsunggalaxyace2.png"},
  {pname:"Samsung Galaxy Ace 3" , varname:"smartphone_samsunggalaxyace3" , img:"imgs/smartphone_samsunggalaxyace3.png"},
  {pname:"Samsung Galaxy Ace 4" , varname:"smartphone_samsunggalaxyace4" , img:"imgs/smartphone_samsunggalaxyace4.png"},
  {pname:"Samsung Galaxy Mini" , varname:"smartphone_samsunggalaxymini" , img:"imgs/smartphone_samsunggalaxymini.png"},
  {pname:"Samsung Galaxy Mini2" , varname:"smartphone_samsunggalaxymini2" , img:"imgs/smartphone_samsunggalaxymini2.png"},
  {pname:"Samsung Galaxy Grand" , varname:"smartphone_samsunggalaxygrand" , img:"imgs/smartphone_samsunggalaxygrand.png"},
  {pname:"Samsung Galaxy Grand Neo" , varname:"smartphone_samsunggalaxygrandneo" , img:"imgs/smartphone_samsunggalaxygrandneo.png"},
  {pname:"Samsung Galaxy Grand 2" , varname:"smartphone_samsunggalaxygrand2" , img:"imgs/smartphone_samsunggalaxygrand2.png"},
]

var Sony = [
  {pname:"Sony Xperia Z5" , varname:"smartphone_sonyexperiaz5" , img:"imgs/smartphone_sonyexperiaz5.png"},
  {pname:"Sony Xperia Z5 Compact" , varname:"smartphone_sonyexperiaz5" , img:"imgs/smartphone_sonyexperiaz5.png"},
  {pname:"Sony Xperia Z4" , varname:"smartphone_sonyexperiaz4" , img:"imgs/smartphone_sonyexperiaz4.png"},
  {pname:"Sony Xperia Z4 Compact" , varname:"smartphone_sonyexperiaz4" , img:"imgs/smartphone_sonyexperiaz4.png"},
  {pname:"Sony Xperia Z3" , varname:"smartphone_sonyexperiaz3" , img:"imgs/smartphone_sonyexperiaz3.png"},
  {pname:"Sony Xperia Z3 Compact" , varname:"smartphone_sonyexperiaz3compact" , img:"imgs/smartphone_sonyexperiaz3compact.png"},
  {pname:"Sony Xperia Z2" , varname:"smartphone_sonyexperiaz2" , img:"imgs/smartphone_sonyexperiaz2.png"},
  {pname:"Sony Xperia Z1" , varname:"smartphone_sonyexperiaz1" , img:"imgs/smartphone_sonyexperiaz.png"},
  {pname:"Sony Xperia Z1 Compact" , varname:"smartphone_sonyexperiaz1" , img:"imgs/smartphone_sonyexperiaz.png"},
  {pname:"Sony Xperia Z" , varname:"smartphone_sonyexperiaz" , img:"imgs/smartphone_sonyexperiaz.png"},
  {pname:"Sony Xperia Z Ultra" , varname:"smartphone_sonyexperiaz" , img:"imgs/smartphone_sonyexperiaz.png"},
  {pname:"Sony Xperia Z" , varname:"smartphone_sonyexperiaz" , img:"imgs/smartphone_sonyexperiaz.png"},
  {pname:"Sony Xperia M2" , varname:"smartphone_sonyexperiam2" , img:"imgs/smartphone_sonyexperiam2.png"},
  {pname:"Sony Xperia SP" , varname:"smartphone_sonyexperiasp" , img:"imgs/smartphone_sonyexperiasp.png"},
  {pname:"Sony Xperia GO" , varname:"smartphone_sonyexperiago" , img:"imgs/smartphone_sonyexperiago.png"},
  {pname:"Sony Xperia U" , varname:"smartphone_sonyexperiau" , img:"imgs/smartphone_sonyexperiau.png"},
  {pname:"Sony Xperia T3" , varname:"smartphone_sonyexperiaz2" , img:"imgs/smartphone_sonyexperiaz2.png"},
  {pname:"Sony Xperia T2" , varname:"smartphone_sonyexperiaz2" , img:"imgs/smartphone_sonyexperiaz2.png"},
]

var Wiko = [
  {pname:"Wiko Cink Five" , varname:"smartphone_wikocinkfive" , img:"imgs/smartphone_wikocinkfive.png"},
  {pname:"Wiko Cink Slim" , varname:"smartphone_wikocinkslim" , img:"imgs/smartphone_wikocinkslim.png"},
  {pname:"Wiko Cink King" , varname:"smartphone_wikocinkking" , img:"imgs/smartphone_wikocinkking.png"},
  {pname:"Wiko Darkside" , varname:"smartphone_wikodarkside" , img:"imgs/smartphone_wikodarkside.png"},
  {pname:"Wiko Darknight" , varname:"smartphone_wikodarknight" , img:"imgs/smartphone_wikodarknight.png"},
  {pname:"Wiko Darkfull" , varname:"smartphone_wikodarkfull" , img:"imgs/smartphone_wikodarkfull.png"},
  {pname:"Wiko Iggy" , varname:"smartphone_wikoiggy" , img:"imgs/smartphone_wikoiggy.png"},
  {pname:"Wiko Ozzy" , varname:"smartphone_wikoozzy" , img:"imgs/smartphone_wikoozzy.png"},
  {pname:"Wiko Peax" , varname:"smartphone_wikopeax" , img:"imgs/smartphone_wikopeax.png"},
  {pname:"Wiko Stairway" , varname:"smartphone_wikostairway" , img:"imgs/smartphone_wikostairway.png"},

]


var tablette = [{name:"iPad2" , img:"imgs/tablette_ipad2.png"}]

var phoneBrandList = [
{brandName:"Apple"},{brandName:"Huawei"},{brandName:"LG"},
{brandName:"Samsung"},{brandName:"Sony"},{brandName:"Wiko"}]

var tabletBrandList = [{brandName:"Tablette Apple"},{brandName:"Tablette Samsung"}]

var pcBrandList = [{brandName:"Fixe"},{brandName:"Portable"}]

var macProductList = [
{pname:"Macbook Air 13" , varname:"laptop_macbookair13" , img:"imgs/laptop_macbookair13.png"},
{pname:"Macbook Air 11" , varname:"laptop_macbookair11" , img:"imgs/laptop_macbookair11.png"},
{pname:"Macbook Pro Unibody 13" , varname:"laptop_macbookprounibody13" , img:"imgs/laptop_macbookprounibody13.png"},
{pname:"Macbook Pro Retina 13" , varname:"laptop_macbookproretina13" , img:"imgs/laptop_macbookproretina13.png"}]

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
    else if (a.innerText == "Huawei"){addEventListener("click",createProductList(Huawei))}
    else if (a.innerText == "LG"){addEventListener("click",createProductList(Lg))}
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
  var productContainer = document.getElementById("productContainer");
  var brandContainer = document.getElementById("brandContainer");
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
  var imgSelect = product[i].img;
  createProductImage.src = imgSelect ;
  createProductBox.addEventListener( "click" , addProductView);
  createProductBox.appendChild(createProductImage);
}

function addProductView(){
  var productContainer = document.getElementById("productContainer");
  var brandContainer = document.getElementById("brandContainer");
  container.style.marginLeft = "2vw";
  searchbox.style.marginLeft = "22vw";
  repairPanel.style.width = "38vw";
  brandContainer.style.marginLeft = "2vw";
  productContainer.style.marginLeft = "2vw";
  var c = this.id.toLowerCase();
  productView.style.backgroundImage = "url(imgs/" + c + ".png)";
  console.log(c);
}

function closeRepairPanel() {
  var productContainer = document.getElementById("productContainer");
  var brandContainer = document.getElementById("brandContainer");
  container.style.marginLeft = "20vw";
  searchbox.style.marginLeft = "42vw";
  brandContainer.style.marginLeft = "20vw";
  repairPanel.style.width = "0vw";
  productContainer.style.marginLeft = "20vw";
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
console.log(iphone[i].pname);
  for (var i = 0; i <= iphone.length; i++) {
    var searchResult1 = iphone[i].pname;
    var searchResult2 = iphone[i].varname;
    if ( searchTerm == searchResult2 ) {
      console.log("Found one !");
    }
  }
}


//REMOVE  CONTAINER

function removeBrandContainer(){
  closeRepairPanel();
  var toRemove = document.getElementById("brandContainer");
  toRemove.parentNode.removeChild(toRemove);
}

function removeProductContainer(){
  closeRepairPanel();
  var toRemove = document.getElementById("productContainer");
  toRemove.parentNode.removeChild(toRemove);
}
