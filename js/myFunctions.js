/* JavaScript created by Henry James https://henryjames.space */
//////////////////////////////////////////////////////////////////////////////
function getRandomInt(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 //The maximum is exclusive and the minimum is inclusive
 return Math.floor(Math.random() * (max - min)) + min;
}
//////////////////////////////////////////////////////////////////////////////
function showAV() {
  var x = document.getElementsByClassName("homeInfo");
  var y = document.getElementsByClassName("audioVisual");

  showHide(x, y, "block");
}
//////////////////////////////////////////////////////////////////////////////
function showPrints() {
  var x = document.getElementsByClassName("homeInfo");
  var y = document.getElementsByClassName("prints");
  var shadow = document.getElementById("theMainPage");

  showHide(x, y, "block");
  console.log(shadow.className);
  
  if (shadow.className === "page shadowSubtle") {
    shadow.className = "page"; 
  } else {
    shadow.className = "page shadowSubtle";
  }
}
//////////////////////////////////////////////////////////////////////////////
function showHide(x, y, blockType) {
  for (var i = 0; i < x.length; i++)  {
    if (x[i].style.display === "none") {
      x[i].style.display = blockType;
      x[i].visibility = "visible";
    } else {
      x[i].style.display = "none";
      x[i].visibility = "hidden";
    }

  for (var j = 0; j < y.length; j++) {
    if (x[i].style.display === blockType) {
      y[j].style.display = "none";
      y[j].visibility = "hidden";
    } else {
      y[j].style.display = blockType;
      y[j].visibility = "visible";
    }
  }
  }
}
//////////////////////////////////////////////////////////////////////////////
function nextBtn(btn) {
  var elmntNext = document.getElementById(btn);
  var buttonValue = elmntNext.value;

  buttonValue++
  if (buttonValue == 7) {
    buttonValue = 0;
  }
  returnCatInfo(buttonValue);
  elmntNext.value = buttonValue;
}
//////////////////////////////////////////////////////////////////////////////
function previousBtn(btn) {
  var elmntNext = document.getElementById(btn);
  var buttonValue = elmntNext.value;

  buttonValue--
  if (buttonValue == -1) {
    buttonValue = 6;
  }
  returnCatInfo(buttonValue);
  elmntNext.value = buttonValue;
}
//////////////////////////////////////////////////////////////////////////////
function printsNext() {
  // list location value stored in the next button
  nextBtn("nextButton");
}

function printsPrevious() {
  // list location value stored in the next button
  previousBtn("nextButton");
}

// displays the selected div on the catalogue screen
function returnCatInfo(buttonValue) {
  var printIDList = ['print1', 'print2', 'print3', 'print4', 'print5', 'print6', 'print7'];
  for (item in printIDList) {
    var itemID = document.getElementById(printIDList[item]);
    itemID.style.display = "none";
  }
  
  var catID = document.getElementById(printIDList[buttonValue]);
  isImgMaxSize(printIDList[buttonValue]);
  catID.style.display = "inline";
}
//////////////////////////////////////////////////////////////////////////////
function isImgMaxSize(imgID) {
  // gets the original image size and current and makes sure
  // the image doesn't go over this to stop poor resolution
  var img = document.getElementById(imgID);

  actualHeight = img.naturalHeight;
  actualWidth = img.naturalWidth;
  currentHeight = img.height;
  currentWidth = img.width;
}
//////////////////////////////////////////////////////////////////////////////