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
})();

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXNzZXRzL2pzL21vZHVsZXMvaGVsbG8uanMiLCIuLi8uLi8uLi9zcmMvYXNzZXRzL2pzL21vZHVsZXMvbmF2LmpzIiwiLi4vLi4vLi4vc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL2RyaXBwbGV0cy5qcyIsIi4uLy4uLy4uL3NyYy9hc3NldHMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlbGxvID0gJ0dpZGR5IFVwIEJ1dHRlcmN1cCdcclxuY29uc3QgdGllZmlnaHRlcnMgPSAnfC0wLXwgey0wLX0gfC0wLXwnXHJcblxyXG5leHBvcnQgeyBoZWxsbywgdGllZmlnaHRlcnMgfVxyXG4iLCJjb25zdCBpbml0TmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKVxyXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKVxyXG4gIGNvbnN0IHNuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NuJylcclxuXHJcbiAgZnVuY3Rpb24gbmF2VG9nZ2xlKCkge1xyXG4gICAgY29uc3QgdyA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICBjb25zdCBicHcgPSA3NjhcclxuICAgIC8vIGNvbnNvbGUubG9nKHcgKyAnIDogJyArIGJwdylcclxuICAgIGlmICh3IDwgYnB3KSB7XHJcbiAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJylcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZUb2dnbGUpXHJcbiAgc24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZUb2dnbGUpXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBpbml0TmF2IH1cclxuIiwiY29uc3QgZHJpcHBsZXRzID0gKCkgPT4ge1xyXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuICBjb25zb2xlLmxvZygnZHJpcHBsZXRzJylcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkcmlwcGxldHMgfVxyXG4iLCJpbXBvcnQgeyBoZWxsbywgdGllZmlnaHRlcnMgfSBmcm9tICcuL21vZHVsZXMvaGVsbG8uanMnXHJcbmltcG9ydCB7IGluaXROYXYgfSBmcm9tICcuL21vZHVsZXMvbmF2LmpzJ1xyXG4vLyBpbXBvcnQgeyBjYXJvdXNlbCB9IGZyb20gJy4vbW9kdWxlcy9jYXJvdXNlbC5qcydcclxuaW1wb3J0IHsgZHJpcHBsZXRzIH0gZnJvbSAnLi9tb2R1bGVzL2RyaXBwbGV0cy5qcydcclxuLy8gaW1wb3J0IENsaXBib2FyZCBmcm9tICdjbGlwYm9hcmQnXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lKi9cclxuY29uc29sZS5sb2coaGVsbG8gKyAnXFxuJyArIHRpZWZpZ2h0ZXJzKVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4vLyAgICAgICAgIFRFU1RJTkcgICAgICAgICAgIC8vXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUludEluUmFuZ2UobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVEcmlwcGxldHMgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2NyZWF0ZURyaXBwbGV0cycpXHJcbiAgY29uc3Qgc3RhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJpcHBsZXRzJylcclxuICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgbGV0IGRzdyA9IHcgKiAyXHJcbiAgbGV0IGR3ID0gMTIgICAvLyBkcmlwIHdpZHRoIGluIHB4XHJcbiAgbGV0IGhtaW4gPSAzMCAqIDJcclxuICBsZXQgaG1heCA9IDMwICogOFxyXG4gIGxldCB0b3RhbGRyaXBzID0gTWF0aC5jZWlsKGRzdyAvIGR3KVxyXG4gIGxldCBkdXJtaW4gPSAxMDAwXHJcbiAgbGV0IGR1cm1heCA9IGR1cm1pbiAqIDNcclxuICBsZXQgZHJpcEFyciA9IFtdXHJcblxyXG4gIC8vIHJlc2V0IHN0YWdlXHJcbiAgc3RhZ2UuaW5uZXJIVE1MID0gJydcclxuICBzdGFnZS5zdHlsZS53aWR0aCA9IGRzdyArICdweCdcclxuXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8PSB0b3RhbGRyaXBzOyBpKyspIHtcclxuICAgIGxldCBkcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCBoZWlnaHQgPSByYW5kb21JbnRJblJhbmdlKGhtaW4sIGhtYXgpXHJcbiAgICBsZXQgZHVyYXRpb24gPSByYW5kb21JbnRJblJhbmdlKGR1cm1pbiwgZHVybWF4KVxyXG4gICAgZHJpcC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnXHJcbiAgICBkcmlwLnN0eWxlWydhbmltYXRpb24nXSA9ICcxIGxpbmVhciBkcmlwJ1xyXG4gICAgZHJpcC5zdHlsZVsnYW5pbWF0aW9uLWR1cmF0aW9uJ10gPSBkdXJhdGlvbiArICdtcydcclxuICAgIGRyaXAuY2xhc3NOYW1lID0gJ2RyaXAnXHJcbiAgICBkcmlwQXJyLnB1c2goZHJpcClcclxuICB9XHJcblxyXG4gIGZvciAodmFyIGkgPSBkcmlwQXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBzdGFnZS5hcHBlbmQoZHJpcEFycltpXSlcclxuICB9XHJcblxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGluaXROYXYoKVxyXG4gIC8vIGNhcm91c2VsKClcclxuICBkcmlwcGxldHMoKVxyXG4gIGNyZWF0ZURyaXBwbGV0cygpXHJcblxyXG4gIC8vIG5ldyBDbGlwYm9hcmQoKVxyXG59KSgpXHJcblxyXG4iXSwibmFtZXMiOlsiaGVsbG8iLCJ0aWVmaWdodGVycyIsImluaXROYXYiLCJuYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnVyZ2VyIiwic24iLCJuYXZUb2dnbGUiLCJ3Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImJwdyIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmlwcGxldHMiLCJsb2ciLCJjb25zb2xlIiwicmFuZG9tSW50SW5SYW5nZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNyZWF0ZURyaXBwbGV0cyIsInN0YWdlIiwiZHN3IiwiZHciLCJobWluIiwiaG1heCIsInRvdGFsZHJpcHMiLCJjZWlsIiwiZHVybWluIiwiZHVybWF4IiwiZHJpcEFyciIsImlubmVySFRNTCIsInN0eWxlIiwid2lkdGgiLCJpIiwiZHJpcCIsImNyZWF0ZUVsZW1lbnQiLCJoZWlnaHQiLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsInB1c2giLCJsZW5ndGgiLCJhcHBlbmQiXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU1BLFFBQVEsb0JBQWQ7QUFDQSxJQUFNQyxjQUFjLG1CQUFwQixDQUVBOztBQ0hBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFNO01BQ2RDLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtNQUNNQyxTQUFTRixTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQWY7TUFDTUUsS0FBS0gsU0FBU0MsY0FBVCxDQUF3QixJQUF4QixDQUFYOztXQUVTRyxTQUFULEdBQXFCO1FBQ2JDLElBQUlDLE9BQU9DLFVBQWpCO1FBQ01DLE1BQU0sR0FBWjs7UUFFSUgsSUFBSUcsR0FBUixFQUFhO1VBQ1BDLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixNQUFyQjs7OztTQUtHQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ1AsU0FBakM7S0FDR08sZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkJQLFNBQTdCO0NBaEJGLENBb0JBOztBQ3BCQSxJQUFNUSxZQUFZLFNBQVpBLFNBQVksR0FBTTs7VUFFZEMsR0FBUixDQUFZLFdBQVo7Q0FGRixDQU9BOztBQ0xBO0FBQ0EsQUFDQTs7OztBQUlBQyxRQUFRRCxHQUFSLENBQVlqQixRQUFRLElBQVIsR0FBZUMsV0FBM0I7Ozs7OztBQU1BLFNBQVNrQixnQkFBVCxDQUEwQkMsR0FBMUIsRUFBK0JDLEdBQS9CLEVBQW9DO1NBQzNCQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsTUFBaUJILE1BQU1ELEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDQSxHQUFyRDs7O0FBR0YsSUFBTUssa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO1VBQ3BCUixHQUFSLENBQVksaUJBQVo7TUFDTVMsUUFBUXRCLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZDtNQUNJSSxJQUFJQyxPQUFPQyxVQUFmO01BQ0lnQixNQUFNbEIsSUFBSSxDQUFkO01BQ0ltQixLQUFLLEVBQVQsQ0FMNEI7TUFNeEJDLE9BQU8sS0FBSyxDQUFoQjtNQUNJQyxPQUFPLEtBQUssQ0FBaEI7TUFDSUMsYUFBYVQsS0FBS1UsSUFBTCxDQUFVTCxNQUFNQyxFQUFoQixDQUFqQjtNQUNJSyxTQUFTLElBQWI7TUFDSUMsU0FBU0QsU0FBUyxDQUF0QjtNQUNJRSxVQUFVLEVBQWQ7OztRQUdNQyxTQUFOLEdBQWtCLEVBQWxCO1FBQ01DLEtBQU4sQ0FBWUMsS0FBWixHQUFvQlgsTUFBTSxJQUExQjs7T0FFSSxJQUFJWSxLQUFJLENBQVosRUFBZUEsTUFBS1IsVUFBcEIsRUFBZ0NRLElBQWhDLEVBQXFDO1FBQy9CQyxPQUFPcEMsU0FBU3FDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtRQUNJQyxTQUFTdkIsaUJBQWlCVSxJQUFqQixFQUF1QkMsSUFBdkIsQ0FBYjtRQUNJYSxXQUFXeEIsaUJBQWlCYyxNQUFqQixFQUF5QkMsTUFBekIsQ0FBZjtTQUNLRyxLQUFMLENBQVdLLE1BQVgsR0FBb0JBLFNBQVMsSUFBN0I7U0FDS0wsS0FBTCxDQUFXLFdBQVgsSUFBMEIsZUFBMUI7U0FDS0EsS0FBTCxDQUFXLG9CQUFYLElBQW1DTSxXQUFXLElBQTlDO1NBQ0tDLFNBQUwsR0FBaUIsTUFBakI7WUFDUUMsSUFBUixDQUFhTCxJQUFiOzs7T0FHRyxJQUFJRCxJQUFJSixRQUFRVyxNQUFSLEdBQWlCLENBQTlCLEVBQWlDUCxLQUFLLENBQXRDLEVBQXlDQSxHQUF6QyxFQUE4QztVQUN0Q1EsTUFBTixDQUFhWixRQUFRSSxDQUFSLENBQWI7O0NBN0JKOzs7O0FBb0NBLENBQUMsWUFBWTs7Ozs7OztDQUFiOzsifQ==
