import React, { createContext, useContext } from 'react';
import { globals } from './Global';

// Create a context for the number of quiz questions
const QuizContext = createContext();

export const QuizProvider = ({ children, numberOfQuestions }) => {
  return (
    <QuizContext.Provider value={globals.gameVal_quizQuestions}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizQuestions = () => useContext(QuizContext);
