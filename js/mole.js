

let score = document.querySelector(".score");
const holes = document.querySelectorAll(".square");
const playBtn = document.getElementById("start");
const stopBtn = document.getElementById("reset");
let image = document.createElement("img");

// start button clicked
playBtn.addEventListener("click" , () => {
   // timerStart();
   // console.log(timerStart());
  // timer starting
   const startTime =1;
   let time = startTime *60;
   
   const count =  document.getElementById("time-left");
   const stop = setInterval(timer, 1000);
   
   function timer(){
               const minits = Math.floor(time/60);
               let second = time % 60;
               
              
               if(second <10){
                   second =  "0" +second
               }
              //console.log(second)
               if(second === "0-1"){
                   clearInterval(stop);
                   clearInterval(getRandomLocation);
                   score.innerHTML = 00;

                  // console.log("last")
   
                   return gameOver();
               }
             count.innerHTML = `${minits}:${second}`
             time--;  
           
    }



    playBtn.setAttribute("disabled", " ");
    stopBtn.removeAttribute("disabled" , " ");
   // console.log("start clicked and disabled");

    let hole;
     let points = 0;

     const getRandomLocation = setInterval(() => {
         let random = Math.floor(Math.random() *9 );
       //  console.log(random);

         hole = holes[random]; 
     //  hole.setAttribute("class" , "mole" );
    //   hole.style.border = "1px solid black;"
        console.log(hole);
         image.setAttribute("src" ,"../image/mole.png");
         image.setAttribute("class" , "mole");
         image.style.width ="100px";
         image.style.height ="100px";
         image.style.margin ="35px";
    

         hole.appendChild(image);

         setTimeout(() => {
            hole.removeChild(image);
         }, 900);

     } ,1000);
     

     window.addEventListener("click" , (e) => {
         if(e.target === image){
             score.innerHTML = ++points;
         }
     });

     stopBtn.addEventListener("click" , () => {
            score.innerHTML = 00;
            clearInterval(getRandomLocation);
            playBtn.removeAttribute("disabled" , " ");
            score.innerHTML = 00;
            clearInterval(stop);
             gameOver();


     });

});

function gameOver(){
    document.getElementById("time-left").innerHTML = "Game Over!";
    document.getElementById("time-left").style.fontSize = "25px"
    
     document.getElementById("start").removeAttribute("disabled");
     document.getElementById("reset").setAttribute("disabled" , "");
     document.getElementById("score").innerHTML = "00"
 
     
 }

