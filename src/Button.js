import React, { useState } from 'react';
import { globals } from './Global';
import Input from './Input';
import './App.css';

const Button = ({ id, textToDisplay }) => {

    var [bgColor, setBackgroundColor] = useState('darkkhaki');
    var [isClicked, setIsClicked] = useState(false);

    //Values for game options
    var gameVal_playerMode = 1;
    var gameVal_timeLimit = 30;
    var gameVal_quizQuestions = 10;

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

    //updates the game values
    // const update

    //starts the game!
    const startGame = (e) => {
        //1st: set game to active (this should hide the config settings too)

        //2nd: set game to active
    }

    function getGameValues() {

        if (document.querySelector("#root > div > section.GameConfigurations").style.display === "none") {
            //use default values
            gameVal_playerMode = 1;
            gameVal_timeLimit = 30;
            gameVal_quizQuestions = 10;
        }
        else {
            //quiz questions
            gameVal_quizQuestions = document.querySelector("#questionNum").value;

            //get player mode
            if (document.querySelector("#\\33 ").isClicked === true) {
                gameVal_playerMode = 1;
            }
            else if (document.querySelector("#\\34 ").isClicked === true) {
                gameVal_playerMode = 2;
            }

            //get time limit per questions
            if (document.querySelector("#\\35 ").style.backgroundColor === 'chartreuse') {
                gameVal_timeLimit = 20;
            }
            else if (document.querySelector("#\\36 ").style.backgroundColor = 'chartreuse') {
                gameVal_timeLimit = 30;
            }
            else if (document.querySelector("#\\37 ").style.backgroundColor = 'chartreuse') {
                gameVal_timeLimit = 45;
            }
        }
    }


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

            case 'Quick Start':
                getGameValues();

                //change global variable to true to disable opening config options after game has begun
                globals.gameIsActive = true;

                //close config options if they are still open
                document.querySelector("#root > div > section.GameConfigurations").style.display = "none";

                document.querySelector("#root > div > section.QuizQuestionContainer").style.display = "block";

                // start the game
                startGame(gameVal_playerMode, gameVal_timeLimit, gameVal_quizQuestions);
                break;

            case 'Single':

                //show player one div
                setPlayerNames(buttonsText);

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
                setPlayerNames(buttonsText);

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

            case '20':
                document.querySelector("#\\35 ").isClicked = true;
                document.querySelector("#\\35 ").style.backgroundColor = 'chartreuse';

                //turn other button selections off
                document.querySelector("#\\36 ").isClicked = false;
                document.querySelector("#\\36 ").style.backgroundColor = 'darkkhaki';
                document.querySelector("#\\37 ").isClicked = false;
                document.querySelector("#\\37 ").style.backgroundColor = 'darkkhaki';

                break;

            case '30':
                document.querySelector("#\\36 ").isClicked = true;
                document.querySelector("#\\36 ").style.backgroundColor = 'chartreuse';

                //turn other button selections off
                document.querySelector("#\\35 ").isClicked = false;
                document.querySelector("#\\35 ").style.backgroundColor = 'darkkhaki';
                document.querySelector("#\\37 ").isClicked = false;
                document.querySelector("#\\37 ").style.backgroundColor = 'darkkhaki';
                break;

            case '45':
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
            style={{ backgroundColor: bgColor || undefined }}>
            {textToDisplay}
        </button>
    );
};

export default Button;