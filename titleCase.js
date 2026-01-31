
var str = "";
function titleCase (str){
return str.replace(/\p{L}+/gu, word =>
    word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
  );
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("I like to code"));  
console.log(titleCase("javaScript is fun"));

