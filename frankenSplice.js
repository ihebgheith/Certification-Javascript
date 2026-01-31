

const tab1 = [];
const tab2 = [];


function frankenSplice(tab1, tab2) {
    for (let i = 0; i < tab2.length; i++) {
    
  tab1.splice(i+1, 0, tab2[i]); 
     
  } return tab1
}


console.log(frankenSplice([1, 3, 5, 8], [11, 23, 45, 81]));
