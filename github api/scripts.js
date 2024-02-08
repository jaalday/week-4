"use strict";
console.log("loaded")

document.addEventListener("DOMContentLoaded", function () {
    console.log("CONTENT LOADED");
});

document.getElementById("myForm").addEventListener("click", function (event){
    //event.preventDefault();
    const userName = document.getElementById("name").value;
    
    console.log(userName);
    
    
    

});

let userName = "jaalday";

const apiUrl = `https://api.github.com/users/${userName}`;
fetch(apiUrl) 
    .then(response => {
        if(!response.ok){
            throw new Error('not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    });

//  document.getElementById("myForm").addEventListener("submit", function (event){
//     event.preventDefault();
//     let userName = document.getElementById("name").value;
//     console.log(userName);
//      this.innerHTML = `https://api.github.com/users/${userName}`;

//     fetch(apiUrl);

// });



function gitHub(data){
    console.log(data);

    const list = document.createElement("p");
        list.innerHTML = data;
        list.appendChild(list);
        
}






