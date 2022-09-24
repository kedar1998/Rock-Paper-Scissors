const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissor = document.querySelector("#s");

let eleuser = document.createElement("span");
let compselection;

let userscore = 0;
let compscore = 0;

rock.addEventListener("click", function(e){
    eleuser.innerHTML = " Rock";
    document.querySelector("#result-user-stat").append(eleuser);
    compselection = comp();

    if(compselection == "Rock"){
        document.querySelector("#result-final-stat").textContent = "Tie"
    }
    else if(compselection == "Paper"){
        document.querySelector("#result-final-stat").textContent = "Computer Wins!!!"
        compscore++;
        document.querySelector("#compScoreVal").textContent = compscore;
    }
    else{
        document.querySelector("#result-final-stat").textContent = "User Wins!!!"
        userscore++;
        document.querySelector("#userScoreVal").textContent = userscore;
    }
});

paper.addEventListener("click", function(e){
    eleuser.innerHTML = " Paper";
    document.querySelector("#result-user-stat").append(eleuser);
    compselection = comp();

    if(compselection == "Paper"){
        document.querySelector("#result-final-stat").textContent = "Tie"
    }
    else if(compselection == "Rock"){
        document.querySelector("#result-final-stat").textContent = "User Wins!!!"
        userscore++;
        document.querySelector("#userScoreVal").textContent = userscore;
    }
    else{
        document.querySelector("#result-final-stat").textContent = "Computer Wins!!!"
        compscore++;
        document.querySelector("#compScoreVal").textContent = compscore;
    }
});

scissor.addEventListener("click", function(e){
    eleuser.innerHTML = " Scissor";
    document.querySelector("#result-user-stat").append(eleuser);
    compselection = comp();

    if(compselection == "Scissor"){
        document.querySelector("#result-final-stat").textContent = "Tie"
    }
    else if(compselection == "Rock"){
        document.querySelector("#result-final-stat").textContent = "Computer Wins!!!"
        compscore++;
        document.querySelector("#compScoreVal").textContent = compscore;
    }
    else{
        document.querySelector("#result-final-stat").textContent = "User Wins!!!"
        userscore++;
        document.querySelector("#userScoreVal").textContent = userscore;
    }
});





// COMPUTER selection
let elecomp = document.createElement("span");
function comp(){
    let arr = ["Rock", "Paper", "Scissor"];
    let selection = arr[Math.floor(Math.random() * arr.length)];
    elecomp.innerHTML = selection;
    document.querySelector("#result-comp-stat").append(elecomp)

    return selection
}


// const a = document.querySelector("#result-user-stat span").innerText;
// console.log(a);