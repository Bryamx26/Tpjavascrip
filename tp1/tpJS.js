let image = document.getElementById("image");

let image1='/tp1/img/free-nature-images.jpg';

let image2='/tp1/img/Landscape-Color.jpg';


image.addEventListener("click", function () {
    this.src = (this.src.includes("free-nature-images.jpg")) 
        ? image2 
        : image1;
    console.log("hey");
});



// image.addEventListener("click",function(){
//     if(image.alt=="image1"){
//         this.alt="image2";
//     }else {
//         this.alt="image1";
//     }
// });