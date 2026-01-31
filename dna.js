function pairElement(ch){
    switch (ch) {
  case 'A':
    return ['A', 'T'];
    break;

  case 'T':
    return ['T', 'A'];
    break;

  case 'C':
    return ['C', 'G'];
    break;

  case 'G':
    return ['G', 'C'];
    break;

  default:
    // runs if no case matches
}
}


function pairAllElements(str) {
  let result = [];  
  for (let i = 0; i < str.length; i++) {
    result.push(pairElement(str[i]));
  }
  return result;
}

console.log(pairAllElements("ATCGA")); // Returns [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairAllElements("TTGAG")); // Returns [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairAllElements("TCTA")); // Returns [["T","A"],["C","G"],["T","A"],["A","T"]]
