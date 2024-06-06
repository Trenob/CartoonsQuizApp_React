import Image from './ConnectToPublicImages'
import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import QuestionCard from './QuestionCard';
import './App.css';



//Program Start
function App() {
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
        <Button id={2} data-testid="1" className={'gameOptionButtons'} textToDisplay={'Quick Start'} />
      </section>


      <section className='GameConfigurations' style={{ display: 'none' }}> {/* Start with display none on page load */}
        {/* This section should be disabled while game is active.
        Configure your game's options here. */}

        <div >
          <div>Single or Versus mode:
            <Button id='3' data-testid='3' textToDisplay={'Single'} />
            <Button id='4' data-testid='4' textToDisplay={'Versus'} />
          </div>
        </div>


        <div >
          <div>Time limit per Question:
            <Button id='5' data-testid='5' textToDisplay={'20'} />
            <Button id='6' data-testid='6' textToDisplay={'30'} />
            <Button id='7' data-testid='7' textToDisplay={'45'} />
          </div>
        </div>


        <div>
          <div >Questions asked in quiz:
            <input type='number' id='questionNum' defaultValue={5} min={5} max={30}></input>
          </div>
        </div>

        <div>
          <Input id='playerOne'/>
          <Input id='playerTwo' style={{display: 'none'}}/>
        </div>

      </section>

      <section className='QuizQuestionContainer' style={{ display: "none" }}>
        {/* Networks: CartoonNetwork  Disney  Nickelodeon */}

        {/* Shows in CartoonNetwork: PowerPuffGirls    KND   FostersHome  */}
        {/* Shows in Disney: DannyPhantom    LiloAndStitch     PhineasAndFerb  */}
        {/* Shows in Nickelodeon: FairyOddParents    JimmyNeutron   SpongebobSquarepants  */}
        <QuestionCard Network={'CartoonNetwork'} Show={'PowerPuffGirls'} />
        <QuestionCard Network={'Disney'} Show={'DannyPhantom'} />
        <QuestionCard Network={'Nickelodeon'} Show={'FairyOddParents'} />
        <QuestionCard Network={'Disney'} Show={'LiloAndStitch'} />
        <QuestionCard Network={'CartoonNetwork'} Show={'KND'} />
        <QuestionCard Network={'Disney'} Show={'PhineasAndFerb'} />
        <QuestionCard Network={'Nickelodeon'} Show={'JimmyNeutron'} />
        <QuestionCard Network={'Nickelodeon'} Show={'SpongebobSquarepants'} />
        <QuestionCard Network={'CartoonNetwork'} Show={'FostersHome'} />
      </section>
      <Button id='8' textToDisplay={'Submit Quiz!'} />
    </div>
  );
}

export default App;