import React, { useState, useEffect } from 'react';
import './style.css';

interface Choice {
  name: string;
  id: number;
}

interface Quiz {
  id: number;
  question: string;
  answer_id: number;
  isAnswered?: boolean;
  isMatched?: boolean;
}

interface DropWords {
  [key: number]: string;
}

interface WordMatchingGameProps {
  answer: Choice[];
  question: Quiz[];
}

interface WordMatchingGameState {
  [x: string]: any;
  draggedWord: string | null;
  isMatched: boolean;
  choicesCopy: Choice[];
  dropWords: DropWords;
  submitted: boolean;
  quiz: Quiz[];
}

const WordMatchingGame: React.FC<WordMatchingGameProps> = (props) => {
  const [state, setState] = useState<WordMatchingGameState>({
    draggedWord: null,
    isMatched: false,
    choicesCopy: [],
    dropWords: {},
    submitted: false,
   //  quiz: [],
    choices: [],
    quiz: [],
});

  const beforeRender = () => {
    const answer = [...props.answer]
    const question = [...props.question]
      return {
         choices: answer,
         quiz: question,
      };
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, word: string) => {
    e.dataTransfer.setData('text/plain', word);
    setState({ ...state, draggedWord: word });
  };

  const handleDrop = (quiz: Quiz, e: React.DragEvent<HTMLDivElement>) => {
    
    e.preventDefault();
    const droppedWord = e.dataTransfer.getData('text/plain');
    const newChoices = [...state.choices]
    const choiceIndex = state.choices.findIndex((choice: { name: string; }) => choice.name === droppedWord);
    // setState({ ...state, choices: newChoices });
    newChoices.splice(choiceIndex,1)
    setState({ ...state, choices: newChoices, dropWords: { ...state.dropWords, [quiz.id]: droppedWord } });
    
    const quizIndex = state.quiz.findIndex((item) => item === quiz);
    const answerIndex = state.choices.findIndex((item: {name: string})  => item.name === droppedWord);
    
    if (answerIndex !== -1) {
      const newQuiz = [...state.quiz];
      if (state.choices[answerIndex].id === quiz.answer_id) {
        newQuiz[quizIndex].isMatched = true;
        newQuiz[quizIndex].isAnswered = true;
      } else {
        newQuiz[quizIndex].isAnswered = true;
      }
      // setState({ ...state, quiz: newQuiz });
    }
  };

  const handleAnswerChoices = (quiz: Quiz) => {
    const dropWordArr = Object.values(state.dropWords)
    for(let i in dropWordArr){
      const indexChoice = state.choices.findIndex((value: { name: string; }) => value.name === dropWordArr[i])
      if(indexChoice !== -1){
        const choices = [...state.choices]
        choices.splice(indexChoice, 1)
        setState({...state, choices})
      }
    }
    return state.dropWords && state.dropWords.hasOwnProperty(quiz.id) ? state.dropWords[quiz.id] : '';
  };

  const resetPosition = () => {
    setState({ ...state});
  };

  const handleSubmission = () => {
    if(!state.submitted){
      setState({ ...state, submitted: true });
    }else{
      const quiz = [...state.quiz]
      for(let i in quiz){
        quiz[i].isAnswered = false
        quiz[i].isMatched = false
      }
      setState({
        draggedWord: null,
        isMatched: false,
        choicesCopy: [],
        dropWords: {},
        submitted: false,
        choices: [...props.answer],
        quiz,
      })
    }
  };

  useEffect(() => {
    const firstStates = beforeRender();
    setState({ ...state, ...firstStates });
  }, [props]);

  const answerBoxStyle: React.CSSProperties = state.isAnswered ? { ...state.position, position: 'absolute' } : {};

  return (
    <div className='relative w-full h-full'>
      <div className="match-word">
        <div className="question-side">
          {state.quiz.map((quiz, index) => (
            <div className="question-list mb-5" key={index}>
              <p className="question">{quiz.question}</p>
              <div
                className={`flex items-center justify-center drop-zone mx-2 text-black ${quiz.isAnswered ? 'choice' : ''}`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(quiz, e)}
              >
                {handleAnswerChoices(quiz)}
              </div>
              {quiz.isMatched && state.submitted ? (
                <p className="result correct text-white">Correct!</p>
              ) : !quiz.isMatched && state.submitted ? (
                <p className="result wrong text-white">Wrong!</p>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
        <div className="answer-side">
          <div className="choices">
            {state.choices.map((choice: any, index: number) => (
              <div
                key={index}
                className={`choice ${state.draggedWord === choice.name ? 'is-returning' : ''}`}
                draggable={true}
                onDragStart={(e) => handleDragStart(e, choice.name)}
                onDragEnd={resetPosition}
                style={state.draggedWord === choice.name ? answerBoxStyle : {}}
              >
                {choice.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      {Object.values(state.dropWords).length === state.quiz.length && (
        
        <button aria-label='refresh-button' className="btn submit-match" onClick={handleSubmission}>
          {
            state.submitted ? (
              <span>refresh</span>
              ):(
              <span>submit</span>
            )
            
          }
        </button>
      )}
    </div>
  );
};

export default WordMatchingGame;
