let container = document.querySelector(".container");
let btn = document.querySelector("#btn-el");
btn.addEventListener("click",takeInput);
let n = 16;

// for(let i =0;i<n;i++){

//   let rowdiv = document.createElement("div");
//   rowdiv.setAttribute("class","rowel");

//   for(let j=0;j<n;j++){

//     let sqdiv = document.createElement("div");
//     sqdiv.setAttribute("class","colel");
//     sqdiv.textContent = i+" "+j;
//     rowdiv.appendChild(sqdiv);

//     /*sqdiv.addEventListener("mouseover",hover);*/
    

//   }
//   container.appendChild(rowdiv);
// }

function takeInput(){
  n = prompt("enter size of square matrix");
  container.innerHTML="";
  printing();
}

//this is constantly adding colour
/*function hover(){
  this.setAttribute("style","background-color:green;");
}*/

function printing(){
  for(let i =0;i<n;i++){

    let rowdiv = document.createElement("div");
    rowdiv.setAttribute("class","rowel");
  
    for(let j=0;j<n;j++){
  
      let sqdiv = document.createElement("div");
      sqdiv.setAttribute("class","colel");
      sqdiv.textContent = i+" "+j;
      rowdiv.appendChild(sqdiv);
  
      /*sqdiv.addEventListener("mouseover",hover);*/
      
  
    }
    container.appendChild(rowdiv);
  }
}