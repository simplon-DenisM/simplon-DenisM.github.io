<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Reparation etc</title>
    <link rel="stylesheet" href="style.css" type="text/css">

  </head>
  <body>
    <input id="searchbox" value="Search..." onclick="removeSearch()" onchange="search()"></input>
    <div id="pageContainer">
      <div class="productButton" onclick="createBrandList(phoneBrandList)"><img src="imgs/smartphone.png">Smartphone</div>
      <div class="productButton" onclick="createBrandList(tabletBrandList)"><img src="imgs/tablette.png">Tablette</div>
      <div class="productButton" onclick="createBrandList(pcBrandList)"><img src="imgs/ordi.png">PC</div>
      <div class="productButton" onclick="createBrandList(macBrandList)"><img src="imgs/mac.png">MAC</div>
    </div>
  </body>
  <script src="script.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
</html>
