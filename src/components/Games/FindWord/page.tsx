import React, { useState, useEffect } from 'react';
import './style.css';

interface SearchWordGameProps {
  answer: string;
  question: string;
}

interface SelectedLetter {
  col: number;
}

interface SearchWordGameState {
  words: string[];
  selectedLetters: SelectedLetter[];
  selectedWord: string;
  isCorrect: boolean;
  isAnswer: boolean;
  grid: string[];
  question: string;
}

const SearchWordGame: React.FC<SearchWordGameProps> = (props) => {
  const [state, setState] = useState<SearchWordGameState>({
    words: ['answer'],
    selectedLetters: [],
    selectedWord: "",
    isCorrect: false,
    isAnswer: false,
    grid: [],
    question: "",
  });

  const beforeRender = (props: SearchWordGameProps) => {
    const answer_split = props.answer.split('');
    const make_arr_obj: string[] = [];
    for (let i in answer_split) {
      make_arr_obj.push(answer_split[i]);
    }
    const scramble = shuffle(make_arr_obj);
    const question = props.question;
    return {
      grid: scramble,
      question: question
    };
  };

  const shuffle = (array: string[]) => {
    let currentIndex = array.length
    let randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const handleClick = (col: number) => {
    const { selectedLetters } = state;
    let newSelectedLetters = [...selectedLetters];

    const selectedIndex = newSelectedLetters.findIndex(coord => coord.col === col);

    if (selectedIndex === -1) {
      newSelectedLetters.push({ col });
    } else {
      newSelectedLetters.splice(selectedIndex, 1);
    }

    const selectedWord = newSelectedLetters.map(coord => state.grid[coord.col]).join('');

    setState({ ...state, selectedLetters: newSelectedLetters, selectedWord });
  };

  const checkWord = () => {
    
    if(!state.isAnswer){
      const { grid, selectedLetters, words } = state;
      const selectedWord = selectedLetters.map((coord) => grid[coord.col]).join('');
      setState({ ...state, selectedWord, isAnswer: true });
  
      if (words.includes(selectedWord)) {
        setState({ ...state, isCorrect: true, isAnswer: true  });
      } else {
        setState({ ...state, isCorrect: false, isAnswer: true  });
      }
    }else{
      setState({
        words: ['answer'],
        selectedLetters: [],
        selectedWord: "",
        isCorrect: false,
        isAnswer: false,
        grid: [],
        question: "",
      })
    }
  };

  const renderGrid = () => {
    const { grid, selectedLetters } = state;

    return (
      <div className="grid-row">
        {grid.map((col, colIndex) => (
          <div
            key={colIndex}
            className={`grid-cell ${selectedLetters.some((coord) => coord.col === colIndex) ? 'selected' : ''}`}
            onClick={() => handleClick(colIndex)}
          >
            {col}
          </div>
        ))}
      </div>
    )
  };

  useEffect(() => {
    const first_states = beforeRender(props);
    setState({ ...state, ...first_states });
  }, [state.isAnswer]);

  return (
    <div className="word-search-game">
      <div>
        <h5>{state.question}</h5>
        <p>Hint : the opposite from question</p>
        <div className="grid-container">{renderGrid()}</div>
        <h5 className='answer-section'>{state.selectedWord}</h5>
        {state.isAnswer && (
          state.isCorrect ? (
            <h3 className='correct-answer-sorting'>Correct!</h3>
          ) : (
            <h3 className='wrong-answer-sorting'>Wrong!</h3>
          )
        )}
        {state.selectedWord.length === state.grid.length && (
          <button aria-label='check-button' className='check-answer-sorting' onClick={checkWord}>
            {
              !state.isAnswer ? (
                <span>check</span>
              ):(
                <span>refresh</span>
              )
            }
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchWordGame;
