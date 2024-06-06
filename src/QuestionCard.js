import React, { useState } from "react";
import Image from './ConnectToPublicImages'


const QuestionCard = ({Network, Show}) => {

    return (
        <div className="card">
            <Image Network={Network} Show={Show}/>

            <div className="card-choices">
                
                <div>
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

                <div id="bonusQues" > {/*style={{ display: "none" }} */}
                    <input type="text"></input>
                </div>
                </div>

                
            </div>
        </div>
    );
}

export default QuestionCard;