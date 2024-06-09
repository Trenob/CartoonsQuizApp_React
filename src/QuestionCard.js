import React, { useState } from "react";
import Image from './ConnectToPublicImages'


const QuestionCard = ({ Network, Show, Question, OptOne, OptTwo, OptThree }) => {

    function getShow () {
        return Show;
    }

    return (
        <div className="card">
            <Image Network={Network} Show={Show} />

            {/* Ideally you'd want to make a database call here to look grab questions for the random question chosen among all the questions within the shows' table */}

            <div className="card-choices">

                <div className="card-question">
                    <h4>{Question}</h4>
                </div>

                <form className="card-answers">
                    <input type="radio" id="opt1" name="question" value="1" />
                    <label for="opt1">{OptOne}</label><br />

                    <input type="radio" id="opt2" name="question" value="2" />
                    <label for="opt2">{OptTwo}</label><br />

                    <input type="radio" id="opt3" name="question" value="3" />
                    <label for="opt3">{OptThree}</label>
                </form>

                {/* 
                <div>
                    Previous code 
                    <div className="card-question">
                        <h4>This is the question</h4>
                    </div>

                    <div id="ques1">
                        <p>Question text number one</p>
                    </div>
                    <div id="ques2">
                        <p>Question text number one</p>
                    </div>
                    <div id="ques3">
                        <p>Question text number one</p>
                    </div>
                    <div id="ques4">
                        <p>Question text number one</p>
                    </div>

                    <div id="bonusQues" > {/*style={{ display: "none" }} 
                    <input type="text"></input>
                </div> 

                </div> */}


            </div>
        </div>
    );
}

export default QuestionCard;