let nom = document.getElementById("nom");

nom.addEventListener("change",function(){
    lettre=this.value.charAt(0).toUpperCase();
//on recupere la premiere valeur (lettre ) et on la remplace par la meme en majuscule.
    console.log(this.value.replace(this.value.charAt(0),lettre));
    nom.value= this.value.replace(this.value.charAt(0),lettre);
   
})