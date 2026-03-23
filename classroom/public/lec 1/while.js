let password = "";
while(password != "secret"){
  password = prompt("Enter the password"); // prompt is a built in browser function. that's why while running the code in vs-code . which is currently running on Node.js platform . That why the error we are getting is : prompt is not defined.To resolve the problem we can use two method. 1. we can create a html file in which <script> // </script> in this section we can put it and it will work fine. 
  /* 2. we can use node js specific function like readline. function askPassword() {
  rl.question("Enter the password: ", function(password) {
    if (password === "secret") {
      console.log("Access granted");
      rl.close();
    } else {
      askPassword();
    }
  });  Now it will work absolutely fine.*/
}

console.log("Access granted");