//Where I will write my code.

//Constants I am going to need.
const instructionText = document.getElementById("instructionText");
const level1 = document.getElementById("level1");
const level2 = document.getElementById("level2");
const level3 = document.getElementById("level3");
const nathiLevel = document.getElementById("nathilevel");
const submitButton = document.getElementById("submitGuess");
const playAgain = document.getElementById("resetGame");
const feedback = document.getElementById("feedback");
const attemptRemaining = document.getElementById("attempts");
const guessedNumber = document.getElementById("guessInput");
let attempts = 5;
let randomNum;
let numberGenerated = false;

// 
level1.addEventListener("change", changeInstructionText);
level2.addEventListener("change", changeInstructionText);
level3.addEventListener("change", changeInstructionText);
nathiLevel.addEventListener("change", changeInstructionText);

function changeInstructionText(){
    if (level1.checked){
        instructionText.innerHTML = "Guess a number between <strong>1 and 10</strong>";
    }

    else if(level2.checked){
        instructionText.innerHTML = "Guess a number between <strong> 1 and 50 </strong>";
    }

    else if(level3.checked){
        instructionText.innerHTML = 'Guess a number between <strong>1 and 100 </strong>';
    }

    else if(nathiLevel.checked){
        instructionText.innerHTML = "Guess a number between <strong> 1 and &infin;</strong>"
    }

}

submitButton.addEventListener("click", start);
playAgain.addEventListener("click", startAgain);

//Logic.
//let randomNum = Math.floor(Math.random() * n)+1;
function start(){

        let guessed_int = Number(guessedNumber.value);

    if (!numberGenerated) {
        if (level1.checked) {
            randomNum = Math.floor(Math.random() * 10) + 1;
        } 
        else if (level2.checked) {
            randomNum = Math.floor(Math.random() * 50) + 1;
        } 
        else if (level3.checked) {
            randomNum = Math.floor(Math.random() * 100) + 1;
        }

        numberGenerated = true;
    }




        if (attempts === 0){
                submitButton.classList.add('hidden');
                playAgain.classList.remove('hidden');
                feedback.textContent = `Sorry bro, you have ran out attempts. The correct answer was ${randomNum}`;
            }

        if (guessedNumber.value === ""){
            feedback.textContent = "Please input a value!"
        }

        //Level 1
        else if (level1.checked){

            if (guessed_int < 1 || guessed_int > 10){
                feedback.textContent = "Please input a valid number!";
            }


            else if (guessed_int === randomNum){
                feedback.textContent = "Correct!";
                submitButton.classList.add("hidden");
                playAgain.classList.remove("hidden");
                attemptRemaining.textContent = "";
                
            }

            else if (guessed_int > randomNum){
                feedback.textContent = "Incorrect! Too High!";
                attempts--;
                attemptRemaining.innerHTML = `<strong>Attempts Remaining:</strong> ${attempts}`;
            }

            else if (guessed_int < randomNum){
                feedback.textContent = "Incorrect! Too Low!";
                attempts--;
                attemptRemaining.innerHTML = `<strong>Attempts Remaining:</strong> ${attempts}`;
            }
        
        }

        //Level 2
        else if (level2.checked){

            if (guessed_int < 1 || guessed_int > 50){
                feedback.textContent = "Please input a valid number!";
            }


            else if (guessed_int === randomNum){
                feedback.textContent = "Correct!";
                submitButton.classList.add("hidden");
                playAgain.classList.remove("hidden");
                attemptRemaining.textContent = "";
                
            }

            else if (guessed_int > randomNum){
                feedback.textContent = "Incorrect! Too High!";
                attempts--;
                attemptRemaining.innerHTML = `<strong>Attempts Remaining:</strong> ${attempts}`;
            }

            else if (guessed_int < randomNum){
                feedback.textContent = "Incorrect! Too Low!";
                attempts--;
                attemptRemaining.innerHTML = `<strong>Attempts Remaining:</strong> ${attempts}`;
            }
        
        }

        //Level 3
        else if (level3.checked){

            if (guessed_int < 1 || guessed_int > 100){
                feedback.textContent = "Please input a valid number!";
            }


            else if (guessed_int === randomNum){
                feedback.textContent = "Correct!";
                submitButton.classList.add("hidden");
                playAgain.classList.remove("hidden");
                attemptRemaining.textContent = "";
                
            }

            else if (guessed_int > randomNum){
                feedback.textContent = "Incorrect! Too High!";
                attempts--;
                attemptRemaining.innerHTML = `<strong>Attempts Remaining:</strong> ${attempts}`;
            }

            else if (guessed_int < randomNum){
                feedback.textContent = "Incorrect! Too Low!";
                attempts--;
                attemptRemaining.innerHTML = `<strong>Attempts Remaining:</strong> ${attempts}`;
            }
        
        }

    
}

function startAgain() {

    attempts = 5;
    numberGenerated = false;
    submitButton.classList.remove('hidden');
    playAgain.classList.add('hidden');
    feedback.textContent = "";
    guessedNumber.value = "";
    attemptRemaining.innerHTML = `<strong>Attempts Remaining:</strong> ${attempts}`;

}


