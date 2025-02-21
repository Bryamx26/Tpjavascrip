let blacklist = new Array("123456", "12345", "1234", "abc123", "abc", "pwd", 
    "password", "mypassword", "dragon", "monkey", "shadow", "master",
     "superman", "spiderman", "batman", "god", "sex", "boobs", "azerty", 
     "qwerty", "iloveyou", "computer", "welcome", "matrix", "secret", "login");

let jauge = document.getElementById("jauge");
let mdp = document.getElementById("mdp");
let checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change",verification);

mdp.addEventListener("input",function(){niveau(this)});



function niveau(element){
    valeur  = element.value.length;
    console.log(element.value.length);
    console.log(element.value);
    verif =(blacklist.includes(element.value))
    ?valeur = 1
    :valeur;
    
    jauge.value = valeur;
    
}

function verification(){

    console.log(checkbox.checked);
    if(checkbox.checked){
        mdp.type  = "text";
    }else{
         mdp.type  = "password";
    }
}