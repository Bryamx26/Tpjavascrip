
let prix = document.getElementById("prix");
let mot  = document.getElementById("article");
let nombre =document.getElementById("nombre")




window.addEventListener("load",function(){
    let total = nombre.value*parseInt(prix.innerText);
    if (nombre.value >= 1){
        mot.append("s"+" le total est de : "+ total+"$ cout initial :");
        console.log(total);
    }
});

nombre.addEventListener("change",function(){

    let total = this.value*parseInt(prix.innerText);
    if (this.value >= 1){
        mot.append("s"+" le total est de : "+ total+"$ cout initial :");
        console.log(total);
    }

});




