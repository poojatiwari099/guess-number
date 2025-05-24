let ramdomnumber;
let gameStart=false;

document.getElementById("start").addEventListener("click", function(){
ramdomnumber= Math.floor(Math.random()*100)+1;
// console.log("random number",ramdomnumber)

gameStart=true;

document.getElementById("output").textContent="game started ! enter a number";
 
// document.getElementById("guess").textContent="";
});

let arr = []

document.getElementById("submit").addEventListener("click",function(){
    if(!gameStart){
         document.getElementById("output").textContent=" please start game frist";
         return;
    }
    let userguess= parseInt(document.getElementById("increment-value").value )
    //  console.log("user guess",userguess)
    arr.push(userguess)
    //  console.log("arrrrrr",arr)
    if(isNaN(userguess)){
        document.getElementById("output").textContent="Please enter a valid number";
        return;
    }
    if (userguess ===ramdomnumber){
        document.getElementById("output").textContent="congreslutions! you guessed it right ;"
        document.getElementById("guess").textContent= `correct number:
            $ {randomnumber}`;
            gameStart=false;
        }
        else if 
            (userguess < ramdomnumber){
        
     document.getElementById("output").textContent=" too low ! try again "
        }
        else if(userguess>ramdomnumber){
    
     document.getElementById("output").textContent="too high !try again "
        }

     document.getElementById("userSelectedValue").innerHTML=arr.map(((item,index)=>`
        ${item}

       `))
        
       document.getElementById("increment-value").value=""
       

})
 

//  if(isNaN(userguess)||userguess<0||userguess>100){
//   return  document.getElementById("output").textContent=" please enter the vaild number between 0 and 100";
   

//  } 

 

