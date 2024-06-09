import React from "react";
import QuestionCard from "./QuestionCard";

const GameContinaer = (e) => {

    const cartoonNetwork = [
        { network: 'CartoonNetwork', show: 'PowerPuffGirls' },
        { network: 'CartoonNetwork', show: 'KND' },
        { network: 'CartoonNetwork', show: 'FostersHome' }
    ];

    const disney = [
        { network: 'Disney', show: 'DannyPhantom' },
        { network: 'Disney', show: 'LiloAndStitch' },
        { network: 'Disney', show: 'PhineasAndFerb' }
    ];

    const nickelodeon = [
        { network: 'Nickelodeon', show: 'FairyOddParents' },
        { network: 'Nickelodeon', show: 'JimmyNeutron' },
        { network: 'Nickelodeon', show: 'SpongeBobSquarepants' }
    ];

    const showQuestions = [
        {
            show: 'PowerPuffGirls',
            questions: [
                'What was the recipe for chemical X?',
                'What was the name of the Monkey villain?',
                'What fictional town did the Powerpuff girls live in and protect?'
            ],
            answer: [
                'sugar, spice, and everything nice',
                'Mojo Jojo',
                'city of Townsville'
            ]
        },
        {
            show: 'DannyPhantom',
            questions: [
                'How old was Danny Phantom when his parents built a strange machine?',
                'What is Danny\'s Hero phrase?',
                'What was the name of Danny\'s father ghost hunting vehicle?'
            ],
            answer: [
                '14',
                'I\'m going GHOST!',
                'Phantomobile'
            ]
        },
        {
            show: 'FairyOddParents',
            questions: [
                'Who was Timmy\'s teacher?',
                'Who was Wanda and Cosmos boss name?',
                'What did Cosmo and Wanda transform into every night?'
            ],
            answer: [
                'Mr. Crocker',
                'Jordan Bon Strangle',
                'Goldfish'
            ]
        },
        {
            show: 'LiloAndStitch',
            questions: [
                'What experiment # is Stitch?',
                'What is Lilo\'s hobby?',
                'What is Lilo\'s sisters name?'
            ],
            answer: [
                '626',
                'Hoolah dancing',
                'Nani'
            ]
        },
        {
            show: 'KND',
            questions: [
                'The agent named Nigel Uno, what color shirt did he wear?',
                'What was the core mission of the KND?',
                'Who was the greatest agent in the KND?'
            ],
            answer: [
                'red',
                'fighting against adult and teenage tyranny',
                'Numbuh 0'
            ]
        }
    ];

    function getRandomQuestion(show) {
        //what show are we getting
        const showData = showQuestions.find(s => s.show === show);

        //get a random question
        if (showData) {
          const randomIndex = Math.floor(Math.random() * showData.questions.length);
          return showData.questions[randomIndex];
        }
        return 'No questions available for this show.';
      }

    
    return (
        <div>

            {/* Networks: CartoonNetwork  Disney  Nickelodeon */}

            {/* Shows in CartoonNetwork: PowerPuffGirls    KND   FostersHome  */}
            {/* Shows in Disney: DannyPhantom    LiloAndStitch     PhineasAndFerb  */}
            {/* Shows in Nickelodeon: FairyOddParents    JimmyNeutron   SpongebobSquarepants  */}

            <QuestionCard
                Network={'CartoonNetwork'}
                Show={'PowerPuffGirls'}
                Question={getRandomQuestion('PowerPuffGirls')}
            />

            <QuestionCard
                Network={'Disney'}
                Show={'DannyPhantom'}
                Question={getRandomQuestion('DannyPhantom')}
            />

            <QuestionCard
                Network={'Nickelodeon'}
                Show={'FairyOddParents'}
                Question={getRandomQuestion('FairyOddParents')}
            />

            <QuestionCard
                Network={'Disney'}
                Show={'LiloAndStitch'}
                Question={getRandomQuestion('LiloAndStitch')}
            />

            <QuestionCard
                Network={'CartoonNetwork'}
                Show={'KND'}
                Question={getRandomQuestion('KND')}
            />
        </div>
    );
}

export default GameContinaer;