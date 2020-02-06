// a simple TeX-input example
var mjAPI = require("mathjax-node");
mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  }
});
mjAPI.start();

var yourMath = 'r(\\varphi) = 2 - 2sin(\\varphi) + \\frac{sin(\\varphi) |cos(\\varphi)|^{\\frac{1}{2}}}{sin(\\varphi) + 1.4}';

mjAPI.typeset({
  math: yourMath,
  format: "TeX", // or "inline-TeX", "MathML"
  svg:true,      // or svg:true, or html:true
}, function (data) {
  if (!data.errors) {console.log(data.svg)}
});