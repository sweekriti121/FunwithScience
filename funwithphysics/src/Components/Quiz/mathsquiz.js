import React, { useEffect, useState } from "react";
import "./Quiz.css";


const MathsQuiz = () => {
  const questions = [
    {
      questionText: "The sum of two numbers is 27 and product is 182. The numbers are:",
      answerOptions: [
        { answerText: "12 and 13", isCorrect: false },
        { answerText: "13 and 14", isCorrect: true},
        { answerText: "14 and 15", isCorrect: false },
        { answerText: "16 and 11", isCorrect: false },
      ],
    },
    {
      questionText:
        "The altitude of a right triangle is 7 cm less than its base. If the hypotenuse is 13 cm, the other two sides of the triangle are equal to:",
      answerOptions: [
        { answerText: " Base=10cm and Altitude=5cm", isCorrect: false },
        { answerText: " Base=12cm and Altitude=5cm", isCorrect: true},
        { answerText: " Base=10cm and Altitude=6cm", isCorrect: false },
        { answerText: " Base=13cm and Altitude=12cm", isCorrect: false },
      ],
    },
    {
      questionText:
        " The sum of the reciprocals of Rehman’s ages 3 years ago and 5 years from now is 1/3. The present age of Rehman is: ",
      answerOptions: [
        { answerText: "7", isCorrect: true },
        { answerText: "10", isCorrect:false},
        { answerText: "5", isCorrect: false },
        { answerText: "6", isCorrect: false },
      ],
    },
    {
      questionText: " The number of multiples of 4 between 10 and 250 is: ",
      answerOptions: [
        { answerText: "50", isCorrect: false },
        { answerText: "40", isCorrect: false },
        { answerText: "60", isCorrect: true },
        { answerText: "30", isCorrect: false },
      ],
    },
  ];  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showAns, setshowAns] = useState(false);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(-1);

  const [timeOut, setTimeOut] = useState(false);

  console.log(timeOut); //Added only for removing the warning this can be removed later when this variable is geeting used somewhere


  const handleQuestion = () => {
    setshowAns(false);
    setIndex(-1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length ) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true); 

    }
  };

  const handleAnswerOptionClick = (isCorrect, index) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIndex(index);
    }
    setshowAns(true);

    setTimeout(handleQuestion,1500);
  };

 function Timer({ setTimeOut, questionNumber }) {

   const [timer, setTimer]= useState(10);

   useEffect(() => {
     
     if (timer === 0) 
    { handleQuestion();
         return setTimeout(true);
   }
     const interval = setInterval(() => {
       setTimer((prev) => prev - 1);
     }, 1000);
  
     return () => clearInterval(interval);
   
   }, [timer, setTimeOut]);

   useEffect(() => {
      setTimer(10); 
  }, [questionNumber]);
    return timer;
 }




  return (
    <div className="quiz">
      <h1>Quiz</h1>
          
      
        {showScore ? (
          <div className="quiz-section">
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
          </div>
        ) : (
          <div className="cardWithTimer">
            <div className="timerFrame">
             <div className="timer">
              <Timer setTimeOut={setTimeOut} questionNumber={currentQuestion} />
             </div>
            </div>
      <div className="quiz-section">
          <div className="responsive">
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span><span id = "total">/{questions.length}</span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, ind) => (
                  <button
                    className={
                      showAns
                        ? answerOption.isCorrect
                          ? "correct"
                          : ind === index
                          ? "incorrect"
                          : null
                        : null
                    }
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect, ind)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>
          </div>
           </div>
        )}
      
    </div>
  );
};

export default MathsQuiz;
