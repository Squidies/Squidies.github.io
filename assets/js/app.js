(function () {
'use strict';

var hello = 'Giddy Up Buttercup';
var tiefighters = '|-0-| {-0-} |-0-|';

var initNav = function initNav() {
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  var sn = document.getElementById('sn');

  function navToggle() {
    var w = window.innerWidth;
    var bpw = 768;
    // console.log(w + ' : ' + bpw)
    if (w < bpw) {
      nav.classList.toggle('open');
    }
  }

  burger.addEventListener('click', navToggle);
  sn.addEventListener('click', navToggle);
};

var dripplets = function dripplets() {
  /* eslint-disable no-console */
  console.log('dripplets');
};

// import { carousel } from './modules/carousel.js'
// import Clipboard from 'clipboard'

/* eslint-disable no-console */
/* eslint-disable no-unexpected-multiline*/
console.log(hello + '\n' + tiefighters);

//---------------------------//
//         TESTING           //
//---------------------------//

function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var createDripplets = function createDripplets() {
  console.log('createDripplets');
  var stage = document.getElementById('dripplets');
  var w = window.innerWidth;
  var dsw = w * 2;
  var dw = 12; // drip width in px
  var hmin = 30 * 2;
  var hmax = 30 * 8;
  var totaldrips = Math.ceil(dsw / dw);
  var durmin = 1000;
  var durmax = durmin * 3;
  var dripArr = [];

  // reset stage
  stage.innerHTML = '';
  stage.style.width = dsw + 'px';

  for (var _i = 0; _i <= totaldrips; _i++) {
    var drip = document.createElement('div');
    var height = randomIntInRange(hmin, hmax);
    var duration = randomIntInRange(durmin, durmax);
    drip.style.height = height + 'px';
    drip.style['animation'] = '1 linear drip';
    drip.style['animation-duration'] = duration + 'ms';
    drip.className = 'drip';
    dripArr.push(drip);
  }

  for (var i = dripArr.length - 1; i >= 0; i--) {
    stage.append(dripArr[i]);
  }
};

//---------------------------//

(function () {
  initNav();
  // carousel()
  dripplets();
  createDripplets();

  // new Clipboard()

  document.getElementById('res').addEventListener('click', function () {
    document.getElementById('resume').classList.add('show');
  });
})();

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXNzZXRzL2pzL21vZHVsZXMvaGVsbG8uanMiLCIuLi8uLi8uLi9zcmMvYXNzZXRzL2pzL21vZHVsZXMvbmF2LmpzIiwiLi4vLi4vLi4vc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL2RyaXBwbGV0cy5qcyIsIi4uLy4uLy4uL3NyYy9hc3NldHMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlbGxvID0gJ0dpZGR5IFVwIEJ1dHRlcmN1cCdcclxuY29uc3QgdGllZmlnaHRlcnMgPSAnfC0wLXwgey0wLX0gfC0wLXwnXHJcblxyXG5leHBvcnQgeyBoZWxsbywgdGllZmlnaHRlcnMgfVxyXG4iLCJjb25zdCBpbml0TmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKVxyXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKVxyXG4gIGNvbnN0IHNuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NuJylcclxuXHJcbiAgZnVuY3Rpb24gbmF2VG9nZ2xlKCkge1xyXG4gICAgY29uc3QgdyA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICBjb25zdCBicHcgPSA3NjhcclxuICAgIC8vIGNvbnNvbGUubG9nKHcgKyAnIDogJyArIGJwdylcclxuICAgIGlmICh3IDwgYnB3KSB7XHJcbiAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJylcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZUb2dnbGUpXHJcbiAgc24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZUb2dnbGUpXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBpbml0TmF2IH1cclxuIiwiY29uc3QgZHJpcHBsZXRzID0gKCkgPT4ge1xyXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuICBjb25zb2xlLmxvZygnZHJpcHBsZXRzJylcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkcmlwcGxldHMgfVxyXG4iLCJpbXBvcnQgeyBoZWxsbywgdGllZmlnaHRlcnMgfSBmcm9tICcuL21vZHVsZXMvaGVsbG8uanMnXHJcbmltcG9ydCB7IGluaXROYXYgfSBmcm9tICcuL21vZHVsZXMvbmF2LmpzJ1xyXG4vLyBpbXBvcnQgeyBjYXJvdXNlbCB9IGZyb20gJy4vbW9kdWxlcy9jYXJvdXNlbC5qcydcclxuaW1wb3J0IHsgZHJpcHBsZXRzIH0gZnJvbSAnLi9tb2R1bGVzL2RyaXBwbGV0cy5qcydcclxuLy8gaW1wb3J0IENsaXBib2FyZCBmcm9tICdjbGlwYm9hcmQnXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lKi9cclxuY29uc29sZS5sb2coaGVsbG8gKyAnXFxuJyArIHRpZWZpZ2h0ZXJzKVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4vLyAgICAgICAgIFRFU1RJTkcgICAgICAgICAgIC8vXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUludEluUmFuZ2UobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVEcmlwcGxldHMgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2NyZWF0ZURyaXBwbGV0cycpXHJcbiAgY29uc3Qgc3RhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJpcHBsZXRzJylcclxuICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgbGV0IGRzdyA9IHcgKiAyXHJcbiAgbGV0IGR3ID0gMTIgICAvLyBkcmlwIHdpZHRoIGluIHB4XHJcbiAgbGV0IGhtaW4gPSAzMCAqIDJcclxuICBsZXQgaG1heCA9IDMwICogOFxyXG4gIGxldCB0b3RhbGRyaXBzID0gTWF0aC5jZWlsKGRzdyAvIGR3KVxyXG4gIGxldCBkdXJtaW4gPSAxMDAwXHJcbiAgbGV0IGR1cm1heCA9IGR1cm1pbiAqIDNcclxuICBsZXQgZHJpcEFyciA9IFtdXHJcblxyXG4gIC8vIHJlc2V0IHN0YWdlXHJcbiAgc3RhZ2UuaW5uZXJIVE1MID0gJydcclxuICBzdGFnZS5zdHlsZS53aWR0aCA9IGRzdyArICdweCdcclxuXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8PSB0b3RhbGRyaXBzOyBpKyspIHtcclxuICAgIGxldCBkcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCBoZWlnaHQgPSByYW5kb21JbnRJblJhbmdlKGhtaW4sIGhtYXgpXHJcbiAgICBsZXQgZHVyYXRpb24gPSByYW5kb21JbnRJblJhbmdlKGR1cm1pbiwgZHVybWF4KVxyXG4gICAgZHJpcC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnXHJcbiAgICBkcmlwLnN0eWxlWydhbmltYXRpb24nXSA9ICcxIGxpbmVhciBkcmlwJ1xyXG4gICAgZHJpcC5zdHlsZVsnYW5pbWF0aW9uLWR1cmF0aW9uJ10gPSBkdXJhdGlvbiArICdtcydcclxuICAgIGRyaXAuY2xhc3NOYW1lID0gJ2RyaXAnXHJcbiAgICBkcmlwQXJyLnB1c2goZHJpcClcclxuICB9XHJcblxyXG4gIGZvciAodmFyIGkgPSBkcmlwQXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBzdGFnZS5hcHBlbmQoZHJpcEFycltpXSlcclxuICB9XHJcblxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGluaXROYXYoKVxyXG4gIC8vIGNhcm91c2VsKClcclxuICBkcmlwcGxldHMoKVxyXG4gIGNyZWF0ZURyaXBwbGV0cygpXHJcblxyXG4gIC8vIG5ldyBDbGlwYm9hcmQoKVxyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdW1lJykuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgfSlcclxufSkoKVxyXG5cclxuIl0sIm5hbWVzIjpbImhlbGxvIiwidGllZmlnaHRlcnMiLCJpbml0TmF2IiwibmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1cmdlciIsInNuIiwibmF2VG9nZ2xlIiwidyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJicHciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJpcHBsZXRzIiwibG9nIiwiY29uc29sZSIsInJhbmRvbUludEluUmFuZ2UiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjcmVhdGVEcmlwcGxldHMiLCJzdGFnZSIsImRzdyIsImR3IiwiaG1pbiIsImhtYXgiLCJ0b3RhbGRyaXBzIiwiY2VpbCIsImR1cm1pbiIsImR1cm1heCIsImRyaXBBcnIiLCJpbm5lckhUTUwiLCJzdHlsZSIsIndpZHRoIiwiaSIsImRyaXAiLCJjcmVhdGVFbGVtZW50IiwiaGVpZ2h0IiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwibGVuZ3RoIiwiYXBwZW5kIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSxRQUFRLG9CQUFkO0FBQ0EsSUFBTUMsY0FBYyxtQkFBcEIsQ0FFQTs7QUNIQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtNQUNkQyxNQUFNQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQVo7TUFDTUMsU0FBU0YsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO01BQ01FLEtBQUtILFNBQVNDLGNBQVQsQ0FB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
