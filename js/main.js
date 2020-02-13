/* JavaScript created by Henry James https://henryjames.space */

//////////////////////////////////////////////////////////////////////////////
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
//////////////////////////////////////////////////////////////////////////////
// Changes the RGB/HEX temporarily to a HSL-Value, modifies that value
// and changes it back to RGB/HEX.
// https://stackoverflow.com/questions/17433015/change-the-hue-of-a-rgb-color-in-javascript
function changeHue(rgb, degree) {
    var hsl = rgbToHSL(rgb);
    hsl.h += degree;
    if (hsl.h > 360) {
        hsl.h -= 360;
    }
    else if (hsl.h < 0) {
        hsl.h += 360;
    }
    return hslToRGB(hsl);
}

// exepcts a string and returns an object
function rgbToHSL(rgb) {
    // strip the leading # if it's there
    rgb = rgb.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(rgb.length == 3){
        rgb = rgb.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(rgb.substr(0, 2), 16) / 255,
        g = parseInt(rgb.substr(2, 2), 16) / 255,
        b = parseInt(rgb.substr(4, 2), 16) / 255,
        cMax = Math.max(r, g, b),
        cMin = Math.min(r, g, b),
        delta = cMax - cMin,
        l = (cMax + cMin) / 2,
        h = 0,
        s = 0;

    if (delta == 0) {
        h = 0;
    }
    else if (cMax == r) {
        h = 60 * (((g - b) / delta) % 6);
    }
    else if (cMax == g) {
        h = 60 * (((b - r) / delta) + 2);
    }
    else {
        h = 60 * (((r - g) / delta) + 4);
    }

    if (delta == 0) {
        s = 0;
    }
    else {
        s = (delta/(1-Math.abs(2*l - 1)))
    }

    return {
        h: h,
        s: s,
        l: l
    }
}

// expects an object and returns a string
function hslToRGB(hsl) {
    var h = hsl.h,
        s = hsl.s,
        l = hsl.l,
        c = (1 - Math.abs(2*l - 1)) * s,
        x = c * ( 1 - Math.abs((h / 60 ) % 2 - 1 )),
        m = l - c/ 2,
        r, g, b;

    if (h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else {
        r = c;
        g = 0;
        b = x;
    }

    r = normalize_rgb_value(r, m);
    g = normalize_rgb_value(g, m);
    b = normalize_rgb_value(b, m);

    return rgbTogether(r,g,b);
}

function normalize_rgb_value(color, m) {
    color = Math.floor((color + m) * 255);
    if (color < 0) {
        color = 0;
    }
    return color;
}

function rgbTogether(r, g, b) {
  return r + "," + g + "," + b
}
/*
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}*/
//////////////////////////////////////////////////////////////////////////////
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
  var x = document.getElementById("draggableDivAV");
  if (x.style.display === "block") {
    x.style.display = "none";

    x.visibility = "visible";
  } else {
    x.style.display = "block";
    x.visibility = "hidden";
  }
}

// Make the DIV element draggable:
//elmnt = document.getElementById("draggableDivAV");
//dragElement(elmnt);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 400, pos4 = 400;
  if (document.getElementById(elmnt.id + 'Header')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'Header').onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

///////////////////////////////////////////////////////////////////////////////
// Background animation
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var sizeW = window.innerWidth;
var sizeH = window.innerHeight;
var dpr = window.devicePixelRatio;
width = sizeW * dpr;
canvas.width = width;
height = sizeH * dpr;
canvas.height = height;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 80;

// animate with fps taken from this thread
//https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;
var x, y, a, b, c, d, opacity, hueRadial, colourChanging, gColour;
var backgroundCounter = 0;

startAnimating(1);

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    console.log(startTime);
    animate();
}

function animate() {
    // stop
    if (stop) {
        return;
    }

    // request another frame
    requestAnimationFrame(animate);
    backgroundCounter = resizeCanvasToDisplaySize(backgroundCounter);

    if (backgroundCounter === 7) {
      return;
    }


    // calc elapsed time since last loop
    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame
    if (elapsed > fpsInterval) {
        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        then = now - (elapsed % fpsInterval);

        x = getRandomInt(0, width);
        y = getRandomInt(0, height);

        a = getRandomInt(0, width);
        b = getRandomInt(0, height);

        c = getRandomInt(0, width);
        d = getRandomInt(0, height);

        opacity = (getRandomInt(0, 100) / 100);

        hueRadial = getRandomInt(-180, 180);
        colourChanging = changeHue("#fa5900", hueRadial);

        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(a, b);
        context.lineTo(c, d);
        context.closePath();


        context.filter = "drop-shadow(9px 9px 2px #e81)";

        gColour = "rgba(" + colourChanging + "," + opacity + ")";

        context.strokeStyle = gColour;
        context.stroke();
        context.fillStyle = gColour;
        context.fill();

        backgroundCounter++;

    }
}
function resizeCanvasToDisplaySize(backgroundCounter) {
  // look up the size the canvas is being displayed
  sizeW = window.innerWidth;
  sizeH = window.innerHeight;

  // adjust displayBuffer size to match
  if (canvas.width !== sizeW || canvas.height !== sizeH) {
    dpr = window.devicePixelRatio;
    width = sizeW * dpr;
    canvas.width = width;
    height = sizeH * dpr;
    canvas.height = height;
    context.scale(dpr, dpr);

    backgroundCounter = 0;
    return(backgroundCounter);
  }
  return(backgroundCounter)
}
