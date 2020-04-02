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
  displaySection("js-audio-visual-section", "#audioVisual");
}
//////////////////////////////////////////////////////////////////////////////
function showHome() {
  displaySection("js-home-section", "#");
}
//////////////////////////////////////////////////////////////////////////////
function showPrints() {
  displaySection("js-prints-section", "#vibrant");
}
//////////////////////////////////////////////////////////////////////////////
function displaySection(elmnt, urlHash) {
  window.location.hash = urlHash;
  elmnt = document.getElementById(elmnt);
  sections = document.getElementsByClassName('content-section');

  for (var i = 0; i < sections.length; i++) {  
     console.log('section', sections[i]);
     sections[i].classList.remove('is-showing');
     console.log('section', sections[i]);
  }
  elmnt.classList.add('is-showing');
}
//////////////////////////////////////////////////////////////////////////////
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