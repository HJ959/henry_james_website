/* JavaScript created by Henry James https://henryjames.space */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
//////////////////////////////////////////////////////////////////////////////
function getRandomInt(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 //The maximum is exclusive and the minimum is inclusive
 return Math.floor(Math.random() * (max - min)) + min;
}
//////////////////////////////////////////////////////////////////////////////
function myMove() {
 var elem = document.getElementById("shadowChange");
 var id = setInterval(frame, 10);
 function frame() {
   colourBorder = changeHue('#34d7ad', getRandomInt(0, 180));
   elmt.style.boxShadow = "7px 11px 0px 0px " + colourBorder;
   }
 }
//////////////////////////////////////////////////////////////////////////////
function showAV() {
  var x = document.getElementsByClassName("homeInfo");
  var y = document.getElementsByClassName("audioVisual");

  for (var i = 0; i < x.length; i++)  {
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
      x[i].visibility = "visible";
    } else {
      x[i].style.display = "none";
      x[i].visibility = "hidden";
    }

  for (var j = 0; j < y.length; j++) {
    if (x[i].style.display === "block") {
      y[j].style.display = "none";
      y[j].visibility = "hidden";
    } else {
      y[j].style.display = "block";
      y[j].visibility = "visible";
    }
  }
  }
}