let name = "Ilya";

// the expression is a number 1
console.log(`hello ${1}` );   // hello 1

// the expression is a string "name"
console.log(`hello ${"name"}` );  // hello name

// the expression is a variable, embeded in it  and it all works as we have use backticks, if we had used the "" or '' the result would have totally different.
console.log(`hello ${name}`); // hello Ilya
