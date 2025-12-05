const block = document.getElementById("block");


//////////////////

let valueUp = 10;

document.addEventListener("keydown",(e)=>{



          console.log(e.key);
    let moveUp = `${valueUp}px`;
if(e.key === "ArrowUp"){
      

 valueUp -= 10;

          console.log(`UP ${valueUp}`);
          console.log(moveUp);
      block.style.top = moveUp; 
}

});

/////////////


document.addEventListener("keydown",(e)=>{

  let moveDown = `${valueUp}px`;

          if (e.key === "ArrowDown"){

          valueUp += 10;
        

          block.style.top =moveDown;

          console.log(moveDown);
          console.log(`down ${valueUp}`);
          } 
          

});










////////////

let valueRight=10;

document.addEventListener("keydown",(e)=>{

let moveRight = `${valueRight}px`;

if(e.key === "ArrowRight"){

 valueRight += 10;

         
      block.style.left = moveRight; 
}

});

/////////////

 

document.addEventListener("keydown",(e)=>{

          if(e.key === "ArrowLeft"){

     valueRight -= 10;
       console.log(`movee right ${valueRight}`);
          let moveLeft = `${valueRight}px`;
          block.style.left = moveLeft;
          }

     

});

//////////

 

