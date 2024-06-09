import React, { useState } from 'react';
import { globals } from './Global';
import './App.css';

const Button = ({ id, textToDisplay, startQuiz }) => {

    var [bgColor, setBackgroundColor] = useState('darkkhaki');
    var [isClicked, setIsClicked] = useState(false);

    //Controls button highlight enter
    const handleMouseEnter = (e) => {

        //change button color if 
        if (e.type === 'mouseenter') {
            setBackgroundColor('#3498db');
        } else if (e.target.isClicked) {
            //do nothing
        }
    }

    //Controls button highlight leave
    const handleMouseLeave = (e) => {

        //change button color
        if (!e.target.isClicked) {
            if (e.type === 'mouseleave'
                && e.target.style.backgroundColor !== '#3498db') {
                setBackgroundColor('darkkhaki');
            }
        } else if (e.target.isClicked) {
            //do nothing
        }
    }

    //Hides and unhides the game option configurations
    const toggleOptionsOnAndOff = () => {
        if (globals.gameIsActive === false) {

            if (document.querySelector("#root > div > section.GameConfigurations").style.display === "none") {
                document.querySelector("#root > div > section.GameConfigurations").style.display = "block";
            }
            else {
                document.querySelector("#root > div > section.GameConfigurations").style.display = "none";
            }
        }
        else if (globals.gameIsActive === true) {
            alert("Please quit or finish your game to configure the next game's options!")
        }
    }

    //starts the game!
    function startGame(playerMode, quizTime, quizQuestions) {

        alert('starting the game!');

        //change global variable to true to disable opening config options after game has begun
        globals.gameIsActive = true;

        //close config options if they are still open
        document.querySelector("#root > div > section.GameConfigurations").style.display = "none";

        //open questions
        document.querySelector("#root > div > section.QuizQuestionContainer").style.display = "block";

        //Submit Quiz button
        document.querySelector("#root > div > section:nth-child(6) > div.quizSubmission").style.display = "block";
        
        //Quiz Timer is shown
        document.querySelector("#root > div > section.submissionAndTimerContainer > div.quizTimer").style.display = "block";


        //2nd: set game to active
    }

    function getGameValues() {

        if (document.querySelector("#root > div > section.GameConfigurations").style.display === "none") {
            //use default values
            globals.gameVal_playerMode = 1;
            globals.gameVal_timeLimit = 60;
            globals.gameVal_quizQuestions = 10;
        }
        else {
            //quiz questions
            globals.gameVal_quizQuestions = document.querySelector("#questionNum").value;

            //get player mode
            if (document.querySelector("#\\33 ").isClicked === true) {
                globals.gameVal_playerMode = 1;
            }
            else if (document.querySelector("#\\34 ").isClicked === true) {
                globals.gameVal_playerMode = 2;
            }

            //get time limit per questions
            if (document.querySelector("#\\35 ").style.backgroundColor === 'chartreuse') {
                globals.gameVal_timeLimit = 30;
            }
            else if (document.querySelector("#\\36 ").style.backgroundColor === 'chartreuse') {
                globals.gameVal_timeLimit = 60;
            }
            else if (document.querySelector("#\\37 ").style.backgroundColor === 'chartreuse') {
                globals.gameVal_timeLimit = 90;
            }
        }
    }

    //abandoned playerNames function
    function setPlayerNames(buttonsText) {

        if (buttonsText === 'Single') {
            //hide player two div
            document.querySelector("#playerTwo").style.display = 'none';
            //document.querySelector("#playerOne > p").innerHTML = 'Player One\'s Name:';
        }
        else if (buttonsText === 'Versus') {
            //show player two div
            document.querySelector("#playerTwo").style.display = '';
            //document.querySelector("#playerTwo > p").innerHTML = 'Player Two\'s Name:';
        }

    }

    ///handles clicks
    const handleMouseClicks = (e) => {
        var buttonsText = e.target.innerText;

        switch (buttonsText) {
            case 'Configure game options':
                toggleOptionsOnAndOff();
                break;

            case 'Start Quiz':
                //only allow if a game is not currently active
                if (!globals.gameIsActive) {
                    getGameValues();

                    //callback
                    if (startQuiz) {
                        startQuiz();
                    }

                    // start the game
                    startGame(globals.gameVal_playerMode, globals.gameVal_timeLimit, globals.gameVal_quizQuestions);
                }
                else {
                    alert('Please finish your current game! Hurry time is ticking!');
                }
                break;

            case 'Single':

                //show player one div
                //setPlayerNames(buttonsText);

                if (!e.target.isClicked) {
                    //set this button to green indicating to user it is clicked
                    document.querySelector("#\\33 ").style.backgroundColor = 'chartreuse';

                    //set button to clicked
                    document.querySelector("#\\33 ").isClicked = true;

                    //set Versus button to not clicked and change color back
                    document.querySelector("#\\34 ").isClicked = false;
                    document.querySelector("#\\34 ").style.backgroundColor = 'darkkhaki';
                }
                else if (e.target.isClicked) {
                    //button is already clicked, so change back to false and change color back
                    document.querySelector("#\\33 ").isClicked = false;
                    document.querySelector("#\\33 ").style.backgroundColor = 'darkkhaki';

                    //set Versus button to clicked and highlight color back
                    document.querySelector("#\\34 ").isClicked = true;
                    document.querySelector("#\\34 ").style.backgroundColor = 'chartreuse';
                }

                break;

            case 'Versus':

                //show player one div
                //setPlayerNames(buttonsText);

                if (!e.target.isClicked) {
                    //set this button to green indicating to user it is clicked
                    document.querySelector("#\\34 ").style.backgroundColor = 'chartreuse';

                    //set button to clicked
                    document.querySelector("#\\34 ").isClicked = true;

                    //set Versus button to not clicked and change color back
                    document.querySelector("#\\33 ").isClicked = false;
                    document.querySelector("#\\33 ").style.backgroundColor = 'darkkhaki';
                }
                else if (e.target.isClicked) {
                    //button is already clicked, so change back to false and change color back
                    document.querySelector("#\\34 ").isClicked = false;
                    document.querySelector("#\\34 ").style.backgroundColor = 'darkkhaki';

                    //set Single button to clicked and highlight color back
                    document.querySelector("#\\33 ").isClicked = true;
                    document.querySelector("#\\33 ").style.backgroundColor = 'chartreuse';
                }

                break;

            case '30':
                document.querySelector("#\\35 ").isClicked = true;
                document.querySelector("#\\35 ").style.backgroundColor = 'chartreuse';

                //turn other button selections off
                document.querySelector("#\\36 ").isClicked = false;
                document.querySelector("#\\36 ").style.backgroundColor = 'darkkhaki';
                document.querySelector("#\\37 ").isClicked = false;
                document.querySelector("#\\37 ").style.backgroundColor = 'darkkhaki';

                break;

            case '60':
                document.querySelector("#\\36 ").isClicked = true;
                document.querySelector("#\\36 ").style.backgroundColor = 'chartreuse';

                //turn other button selections off
                document.querySelector("#\\35 ").isClicked = false;
                document.querySelector("#\\35 ").style.backgroundColor = 'darkkhaki';
                document.querySelector("#\\37 ").isClicked = false;
                document.querySelector("#\\37 ").style.backgroundColor = 'darkkhaki';
                break;

            case '90':
                document.querySelector("#\\37 ").isClicked = true;
                document.querySelector("#\\37 ").style.backgroundColor = 'chartreuse';

                //turn other button selections off
                document.querySelector("#\\35 ").isClicked = false;
                document.querySelector("#\\35 ").style.backgroundColor = 'darkkhaki';
                document.querySelector("#\\36 ").isClicked = false;
                document.querySelector("#\\36 ").style.backgroundColor = 'darkkhaki';
                break;

            default:
            //
        }
    }


    return (
        <button
            id={id}
            isClicked={isClicked}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseClicks}
            startQuiz={startQuiz}
            style={{ backgroundColor: bgColor || undefined }}>
            {textToDisplay}
        </button>
    );
};

export default Button;