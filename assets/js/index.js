// get elements
var a = document.getElementsByTagName('a'),
    s = document.getElementById('sun'),
    sun = document.getElementById('sunburst'),
    // <--- the svg
h = document.getElementById('header'),
    ht = document.getElementById('headerTagline'),
    windowWidth = window.innerWidth;

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
// rotate stuff
var lastDegree = 0;

function rotateSomething(el, speed, deg) {
  var degMax = 180;

  function rotate() {
    deg = (deg + speed) % degMax;
    el.style.transform = 'rotate(' + deg + 'deg)';
    window.requestAnimationFrame(rotate);
    lastDegree = deg;
  }

  window.requestAnimationFrame(rotate);
}

// toggle "ON" class for all elements included in function params
function toggleON() {
  for (i = 0; i < arguments.length; i++) {
    arguments[i].classList.toggle('on');
  }
}

// light the fire
window.addEventListener("load", function (event) {
  rotateSomething(sun, 0.033, 0);
  // add event listeners to toggle "ON"

  var _loop = function _loop(_i) {
    var selectedLink = a[_i];

    selectedLink.addEventListener('mouseenter', function () {
      toggleON(s, h, ht);
      rotateSomething(sun, 0.66, lastDegree);
    });

    selectedLink.addEventListener('mouseleave', function (event) {
      toggleON(s, h, ht);
      rotateSomething(sun, 0.033, lastDegree);
    });

    // click delay for touchscreens so they get to experience the rotational magnificence
    if ('ontouchstart' in document.documentElement) {
      selectedLink.addEventListener('touchstart', function (event) {
        event.preventDefault();
        toggleON(s, h, ht, selectedLink);
        rotateSomething(sun, 0.66, lastDegree);
      });

      selectedLink.addEventListener('touchend', function (event) {
        setTimeout(function () {
          window.location = selectedLink.href;
        }, 3000);
      });
    }
  };

  for (var _i = 0; _i < a.length; _i++) {
    _loop(_i);
  }
});