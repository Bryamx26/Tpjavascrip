// radio 
let supplement = document.getElementById("rad");
let supplement2 = document.getElementById("rad2");

let total=0;
// 
let divSupplement =document.getElementById("supplements");

// 
let checbox = document.getElementsByClassName("supplement");

console.log(supplement.checked);    
// methode de payment
let payment = document.getElementsByClassName("payment");

// DOM span du prix
let prix = document.getElementById("prix");

// DOM pizza
let pizza = document.getElementById("pizza");

supplement.addEventListener("input",checker);
supplement2.addEventListener("input",checker);
window.addEventListener("change",prixUpdate);
window.addEventListener("load",prixUpdate);

// gere les inputs  
function checker(){

    for(let i=0;(i<=checbox.length-1);i++){

        if(checbox[i].checked){

            checbox[i].checked = false;

        }
    }

   if(supplement.checked){

    divSupplement.classList.add("visible");
   }else{
    // console.log();
    divSupplement.classList.remove("visible");
   }
 
}


function prixUpdate(){
    total = 0;
    for(let i=0;(i<=checbox.length-1);i++){

        if(checbox[i].checked){

            total += parseFloat(checbox[i].value);
            // console.log(total);

        }

    }
    for(let i=0;(i<=payment.length-1);i++){

        if(payment[i].checked){

            total += parseFloat(payment[i].value);
            // console.log(total);

        }

    }
    total+= parseFloat(pizza.value);

    prix.innerText=total;
}