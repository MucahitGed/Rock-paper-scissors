/* <i class="fa-solid fa-hand-back-fist"></i> :rock */
/*<i class="fa-solid fa-hand"></i> : paper */ 
/* <i class="fa-solid fa-hand-scissors"></i>: scissors */

const buttons = document.querySelectorAll(".btn");
const left_hand = document.querySelector(".left-hand");
const right_hand = document.querySelector(".right-hand");
const result = document.querySelector(".result");
const result_winner = document.querySelector(".result-winner")
const restartGame = document.querySelector(".restart")

let left_num;
let right_num; 

restartGame.addEventListener("click" , ()=>{
    location.reload()
})

const hand_arr = ["hand-back-fist" , "hand" ,"hand-scissors"]

buttons.forEach(button =>{
    button.addEventListener("click" , ()=>{
        if(button.classList.contains("rock")){
            left_hand.innerHTML = `
            <div class="left-hand myHand hand">
                <h2>Your Hand</h2>
                <i class="fa-solid fa-${hand_arr[0]} fa-7x"></i>
            </div>`
            left_num = 0;
        }if(button.classList.contains("paper")){
            left_hand.innerHTML = `
            <div class="left-hand myHand hand">
                <h2>Your Hand</h2>
                <i class="fa-solid fa-${hand_arr[1]} fa-7x"></i>
            </div>`
            left_num = 1;
        }if(button.classList.contains("scissors")){
            left_hand.innerHTML = `
            <div class="left-hand myHand hand">
                <h2>Your Hand</h2>
                <i class="fa-solid fa-${hand_arr[2]} fa-7x"></i>
            </div>`
            left_num = 2;
        }
        console.log("left" + left_num)
        
        const num = Math.random();

        if(num < 0.33){
            right_hand.innerHTML = `<div class="right-hand hand">
            <h2>Enemy Hand</h2>
            <i class="fa-solid fa-${hand_arr[0]} fa-7x"></i>
          </div>`
          right_num = 0;
        }if(num > 0.33 && num < 0.66){
            right_hand.innerHTML = `<div class="right-hand hand">
            <h2>Enemy Hand</h2>
            <i class="fa-solid fa-${hand_arr[1]} fa-7x"></i>
          </div>`
          right_num = 1;
        }if(num > 0.66 && num <= 1){
            right_hand.innerHTML = `<div class="right-hand hand">
            <h2>Enemy Hand</h2>
            <i class="fa-solid fa-${hand_arr[2]} fa-7x"></i>
          </div>`
          right_num = 2;
        }
        console.log("right"+ right_num)

        oneMatch();
        winner()
    })
});

function oneMatch(){
    if(left_num == right_num){
        result.innerHTML = "Equal";
    }if(left_num== 0 && right_num== 2){
        result.innerHTML = "You Won"
    }if(left_num == 0 && right_num == 1){
        result.innerHTML = "You Lost"
    }if(left_num == 1 && right_num == 0){
        result.innerHTML = "You Won"
    }if(left_num == 1 && right_num == 2){
        result.innerHTML = "You Lost"
    }if(left_num == 2 && right_num == 0){
        result.innerHTML = "You Lost"
    }if(left_num == 2 && right_num == 1){
        result.innerHTML = "You Won"
    }
}
    let left_score = 0;
    let right_score = 0;



function winner(){
    let score = `<div class="result-winner">${left_score} - ${right_score}</div>`
    if(result.innerHTML == "You Won"){
       left_score++;
       result_winner.innerHTML =  score; 
    }if(result.innerHTML == "You Lost"){
        right_score++;
        result_winner.innerHTML =  score;
    }if(result.innerHTML == "Equal"){
        result_winner.innerHTML =  score;
    }


    if(left_score > 10 || right_score > 10){
        restartGame.style.display = "block";
        result_winner.style.display = "none"
        buttons.forEach(button =>{
            button.classList.add("disabled")
        })
    }
}