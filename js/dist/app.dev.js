"use strict";

var _this = void 0;

window.addEventListener('scroll', function (e) {
  document.body.style = "--scrollTop: ".concat(_this.scrollY, "px");
});