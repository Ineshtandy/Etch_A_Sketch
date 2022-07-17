let container = document.querySelector(".container");

for(let i =0;i<16;i++){

  let rowdiv = document.createElement("div");
  rowdiv.setAttribute("class","rowel");

  for(let j=0;j<16;j++){

    let sqdiv = document.createElement("div");
    sqdiv.setAttribute("class","colel");
    sqdiv.textContent = i+" "+j;
    rowdiv.appendChild(sqdiv);

    /*sqdiv.addEventListener("mouseover",hover);*/
    

  }
  container.appendChild(rowdiv);
}

//this is constantly adding colour
/*function hover(){
  this.setAttribute("style","background-color:green;");
}*/