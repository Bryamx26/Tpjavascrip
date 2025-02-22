let tableau_element = document.getElementsByTagName("span");







window.addEventListener("load",function(){createurMail(tableau_element)});

function createurMail(tableau_element){


for (let i=0;(i<=(tableau_element.length)-1);i++){

    // console.log(tableau_element[i].className);
    // console.log(tableau_element[i].innerText);
    
    if(tableau_element[i].className == "emailstd"){
        
        tableau_element[i].innerText += "@std.mail";
    }else{
        
        tableau_element[i].innerText += "@mail";
    }
  

}

}
