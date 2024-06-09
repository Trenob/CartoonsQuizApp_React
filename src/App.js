import Image from './ConnectToPublicImages'
import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import QuestionCard from './QuestionCard';
import Timer from './Timer';
import './App.css';
import { globals } from './Global';
import GameContinaer from './GameContainer';



//Program Start
function App() {
  const [startTheGame, setStartTheGame] = useState(false);

  //starts the game timer
  const startTimer = () => {
    setStartTheGame(true);
  }

  //user may submit the quiz at anytime. stopping the game
  const stopTimer = () => {
    setStartTheGame(false);
  }

  //resets the quiz
  const resetQuiz = () => {
    alert('Quiz has been reset');
  }

  //final results
  function scoreQuizDisplayResults() {
    alert('The Game has finished!\nYour score is: ##');
  }

  return (
    <div className="Toon Quiz">

      <section className='Title'>The Toon Quiz</section>

      <section className='PageHeader'>
        <div>
          <div>
            <p>
              <Image Network={'Public'} Show={'Da_Rules'} />
              Welcome to the Toon Quiz! Here you will test your knowledge individually, or against another fellow toon lover! Hop right into a quick game by clicking on Start or configure the game options to your liking beforehand! After playing, don't forget to reccommend questions, toon networks, and anything else for us to add for future updates.
              <br /><br /><div style={{ textAlign: 'center' }}>Good luck and have fun!</div>
            </p>
          </div>
        </div>
      </section>


      <section className='ConfigAndStartButtons'>
        {/*unhide html covering up the game options*/}
        <Button id={1} data-testid="1" className={'gameOptionButtons'} textToDisplay={'Configure game options'} />

        {/*start the game*/}
        <Button id={2} data-testid="1" className={'gameOptionButtons'} textToDisplay={'Start Quiz'} startQuiz={startTimer} />
      </section>


      <section className='GameConfigurations' style={{ display: 'none' }}> {/* Start with display none on page load */}
        {/* This section should be disabled while game is active.
        Configure your game's options here. */}

        <div >
          <div>Single or Versus mode: <br />
            <Button id='3' data-testid='3' textToDisplay={'Single'} />
            <Button id='4' data-testid='4' textToDisplay={'Versus'} />
          </div>
        </div>


        <div >
          <div>Time limit for the Quiz: (seconds) <br />
            <Button id='5' data-testid='5' textToDisplay={'30'} />
            <Button id='6' data-testid='6' textToDisplay={'60'} />
            <Button id='7' data-testid='7' textToDisplay={'90'} />
          </div>
        </div>


        <div>
          <div >Questions asked in quiz:
            <input type='number' id='questionNum' defaultValue={5} min={5} max={30}></input>
          </div>
        </div>

        {/* <div>
          <Input id='playerOne'/>
          <Input id='playerTwo' style={{display: 'none'}}/>
        </div> */}

      </section>

      <section className='QuizQuestionContainer' style={{ display: "none" }}>
        <GameContinaer />
      </section>

      <section className='submissionAndTimerContainer' style={{ display: 'inline-flex' }}>
        <div className='quizSubmission' style={{ display: 'none' }}>
          <Button id='8' textToDisplay={'Submit Quiz!'} />
        </div>

        <div className='quizTimer' style={{ display: 'none' }}>
          {/* Need startMins to look for the global time limit for it's time */}
          {/* Need startSeconds to look for the global time limit for it's time */}
          <Timer
            startMins={0}
            startSeconds={60}
            whenTimerEnds={scoreQuizDisplayResults}
            startTheGame={startTheGame} />
        </div>
      </section>

    </div>
  );
}

export default App;