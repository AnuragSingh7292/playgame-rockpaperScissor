function displayGame()
{

    var checkBox = document.getElementById("agreeCheckbox");
    if (checkBox.checked == false) 
    {
        alert("Please confirm that you have read and agree to the rules before starting the game.");
    
    } else {
        
    document.getElementById('rule_box').style.display = "none";
    document.getElementById('game').style.display = "block";
    }
}


document.getElementById('feedback').addEventListener("click",function(){

    document.getElementById('rule_box').style.display ="none";
    document.getElementById('game').style.display ="none";
    document.querySelector('.feedback-section').style.display ="block"; 
    document.getElementById('feedback').style.display ="none";
});



document.getElementById('submitform').addEventListener("click", function(event) {
        
        setTimeout(function()
        {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('feedbacktextarea').value = "";

    },2000);
});

document.getElementById("gotohomepage").onclick = function () {
    window.location.href = "index.html";
};



let userScore = 0;
let compScore = 0;
let countTimes = 1;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    // rock , paper , scissors
    const randIdex = Math.floor(Math.random() * 3);
    return option[randIdex];

}


const drawGame = () => {
    msg.innerText = " Game was draw. Play again! ";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    countTimes++;
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = genCompChoice();

    setTimeout(function () {

        if (userChoice === compChoice) {
            // draw game 
            drawGame();
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                // scissors ,paper
                userWin = compChoice === "paper" ? false : true;
            }
            else if (userChoice === "paper") {
                // rock , scissors
                userWin = compChoice === "scissors" ? false : true;
            }
            else {
                // rock , paper
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
    }, 1000); // 1 second 

};

// function emailSend(){

//     Email.send({
//         Host : "",
//         Username : "",
//         Password : "",
//         To : '',
//         From : "",
//         Subject : "",
//         Body : ""
//     }).then(
//       message => alert(message)
//     );
// }



// Event listener for user's choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); // Play the game
        });
});


