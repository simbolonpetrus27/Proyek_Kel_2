import React, { useState } from 'react';

const BigQuiz = () => {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    
    const questions = [
        {
          question: "What is 2 + 2?",
          options: ["3", "4", "5"],
          answer: "4",
        },
        {
           question: "What is the capital of France?",
           options: ["Berlin", "Madrid", "Paris"],
           answer: "Paris",
        },
        {
           question: "Who developed the theory of relativity?", 
           options: ["Newton", "Einstein", "Galileo"],
           answer: "Einstein",
        }   
      ];
      
      const handleAnswer = (answer) => {
        if (answer === questions [currentQuestionIndex].answer) {
            setScore (score + 1);
        }
        
        if (currentQuestionIndex < questions.length - 1) { 
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizCompleted(true);
        }
      };
      
      return (
        <div className="big-quiz">
            {!isQuizCompleted ? (
                <div>
                   <h2>Question {currentQuestionIndex + 1}</h2>
                   <p>{questions[currentQuestionIndex].question}</p>
                <div>
                    {questions [currentQuestionIndex].options.map((option, index) => ( 
                    <button key={index} onClick={() => handleAnswer (option)}>
                       {option}
                     </button>
                    ))}
                  </div>
                  </div>
                )  : (    
                    <div>
                       <h2>Quiz Completed</h2>
                       <p>Your score: {score} / {questions.length}</p>
                    </div>
                  )}
                 </div>
               );
            };
               
export default BigQuiz;