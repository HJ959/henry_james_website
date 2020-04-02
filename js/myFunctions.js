/* JavaScript created by Henry James https://henryjames.space */
//'use strict';
//////////////////////////////////////////////////////////////////////////////
function loadURLHash() {
  if (window.location !== "") {
    var hashValue = window.location.hash;
    var hashValues = hashValue.split("#");
    
    var funcNames = {"vibrant": "showPrints",
                     "audioVisual": "showAV"}

    /*
    The below seems to be matching the AV? but also showing prints? Hash
    value seems to be audioVisual after? 
    */

    for (var func in funcNames) {
      if (func === hashValues[1]) {
        console.log(func);
        window[funcNames[func]]();
      }
    }
  }
 }
//////////////////////////////////////////////////////////////////////////////
function getRandomInt(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 //The maximum is exclusive and the minimum is inclusive
 return Math.floor(Math.random() * (max - min)) + min;
}
//////////////////////////////////////////////////////////////////////////////
function showAV() {
  window.location = "#audioVisual";
  displaySection("js-audio-visual-section");
}
//////////////////////////////////////////////////////////////////////////////
function showHome() {
  window.location = "";
  displaySection("js-home-section");
}
//////////////////////////////////////////////////////////////////////////////
function showPrints() {
  window.location = "#vibrant";
  displaySection("js-prints-section");
}

// DRY Principle
// Back Button = Shows Home - Hides Everything Else
// Visual Button = Shows Visual - Hides Everything Else
// Prints Button = Shows Prints - Hides Everything Else

// A button that hides all content sections then shows element.
// 
function displaySection(elmnt) {
  elmnt = document.getElementById(elmnt);
  sections = document.getElementsByClassName('content-section');
  console.log(sections);

  for (var section; section > sections.length; sections++) {
     console.log('section', section);
     
     sections[section].classList.remove('is-showing');
  }
  elmnt.classList.add('is-showing');
}
//////////////////////////////////////////////////////////////////////////////
function showHide(x, y, blockType, hashString) {

  if (x.style.display === "none") {
      x.style.display = blockType;
      x.visibility = "visible";
      window.location = "";
    } else {
      x.style.display = "none";
      x.visibility = "hidden";
    }

    if (x.style.display === blockType) {
      y.style.display = "none";
      y.visibility = "hidden";
    } else {
      y.style.display = blockType;
      y.visibility = "visible";
      // update the hash values so that URLs can be shared with viewers
      window.location = hashString;
    }


    // 
}
//////////////////////////////////////////////////////////////////////////////
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

// When we navigate to a section, we want to update the URL to include a hash value that signifies what section we are on
// Helpful helpers that you might need are:
// To set the hash initially, you will need: window.location = "#hash-goes-here"
// To update the hash, you will need: window.location.hash = "#new-hash"

// #section#two

// When we land on the website, we want to check to see if there is a hash value appended to the URL, and if there is, we want to show the corresponding section.
// To fetch the hash, you will need window.location, and maybe a split of the string on the hash. i.e. window.location.split('#');
// split
// window.location
// window.location.hash

// var newString = window.location.split('#');