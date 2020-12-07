"use strict";

setInterval(time, 1000);

function time() {
  dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours();
  var m = dt.getMinutes();
  var s = dt.getSeconds();
  document.querySelector('.showTime').innerHTML = 'DATE：' + y + '-' + mt + '-' + day + '&nbsp; ' + h + ':' + m + ':' + s;
}