/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/
var RESET = '\x1b[0m';

var sw = process.stdout.columns;
var columns = Math.floor(Math.random()*3) + 1;
var cw = sw/columns;
var l = cw/2;
var r = cw/2;
var dir = 1;
var width = Math.floor(Math.random()*14) + 8;
var chars = ['╱','╲'];

function draw () {
  setTimeout(draw, 1000/20);

  if(l < 0)
    dir = -1;
  if(l > cw/2) {
    columns = Math.floor(Math.random()*3) + 1;
    cw = sw/columns;
    l = cw/2;
    r = cw/2;
    dir = 1;
    width = Math.floor(Math.random()*4) + 2;
  }

  if(dir == 1) {
    l--;
    r++;
  } else {
    l++;
    r--;
  }    

  var bg = Math.floor(Math.random()*8);
  var output = '\x1b[4' + bg + 'm\x1b[96m';

  for (var j = 0; j <columns; j++)
  {
    var offset = 0;
    if (j > 0)
      offset = 1;

    for (var i = 0 + offset; i < cw; i++) {
      if(i < l || i > r)
        output += '\x1b[4' + bg + 'm ';
      else if (i < l + width || i > r - width) {
          output += '\x1b[46m' + chars[Math.floor(Math.random()*chars.length)];
      } else {
        output += '\x1b[4' + bg + 'm ';
      }
    }
  }    
  console.log(output);
}

draw();
