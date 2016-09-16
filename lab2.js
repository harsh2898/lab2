var user = prompt("What do you choose rock, paper or scissors?");
var computer = Math.random();
if (computer < 0.34) {
	computer = "rock";
} else if(computer <= 0.67) {
	computer = "paper";
} else {
	computer = "scissors";
} 
console.log("Computer: " + computer);

var compare = function(user, computer) {
    if(user === computer) {
        return "Result is tie...!!";
    }
  
else if(user === "rock") {
    if(computer === "scissors") {
        return "rock wins";
    }
    else {
        return "paper wins";
    }
}
  
else if (user === "paper") {
       if(computer === "rock") {
        return "paper wins";
    }
    else {
        return "scissors wins";
    }
}
  
else if (user === "scissors") {
       if(computer === "paper") {
        return "scissors wins";
        }
        else if (computer === "rock") {
            return "rock wins";
        }
    } 
  
 
};
console.log(compare(user,computer));