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
        var ArrayInStrings = ArrayInput[e].toString().split(' ');
        var ArrayPatStrings = ArrayPatterns[f].toString().split(' ');
        var h=0;
        for(g=0; g<ArrayInStrings.length; g++){
          if (!ArrayInStrings[g].includes(ArrayPatStrings[g])) {
            h = h+1;
          }
        }
        if (h>1){
          h=0;
        }
        else{
          ArrayThirdMode.push(ArrayInput[e]);
        }
        
        // console.log(i);
      }
    }
    console.log('Mode 3: ', ArrayThirdMode);

  });
});