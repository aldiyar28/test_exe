var fs = require("fs");
var ArrayInput = [];
var ArrayPatterns = [];
var ArrayFirstMode = [];
var ArraySecondMode = [];
var ArrayThirdMode = [];

fs.readFile("input.txt", function(err, input) {
  fs.readFile("patterns.txt", function(err, patterns){

    ArrayInput = input.toString().split('\r\n');
    ArrayPatterns = patterns.toString().split('\r\n');
    console.log('Input.txt: ', ArrayInput);
    console.log('Patterns.txt: ', ArrayPatterns);

    for (var a = 0; a < ArrayInput.length; a++) {
      for (var b = 0; b < ArrayPatterns.length; b++) {
        if (ArrayInput[a] == ArrayPatterns[b]) {
          ArrayFirstMode.push(ArrayInput[a]);        
        }
      }
    }
    console.log('Mode 1: ', ArrayFirstMode);   

    for (var c = 0; c < ArrayInput.length; c++) {
      for (var d = 0; d < ArrayPatterns.length; d++) {
        if (ArrayInput[c].includes(ArrayPatterns[d])) {
          ArraySecondMode.push(ArrayInput[c]);
        }
      }
    }
    console.log('Mode 2: ', ArraySecondMode);

    for (var e = 0; e < ArrayInput.length; e++) {
      for (var f = 0; f < ArrayPatterns.length; f++) {
        var InputString = ArrayInput[e].toString();
        var PatternsString = ArrayPatterns[f].toString();
        for(var g = 0; g < InputString.length && g < PatternsString.length; g++){
          if (InputString[g] != PatternsString[g]) {
            if (InputString.substring(g+1) == PatternsString.substring(g+1) 
            || InputString.substring(g+1) == PatternsString.substring(g) 
            || InputString.substring(g) == PatternsString.substring(g+1)) {
              ArrayThirdMode.push(ArrayInput[e]);
            }
          }
          if (Math.abs(InputString.length - PatternsString.length) == 1) {
            ArrayThirdMode.push(ArrayInput[e]);
          }
        }
      }
    }
    console.log('Mode 3: ', [...new Set(ArrayThirdMode)]);

  });
});