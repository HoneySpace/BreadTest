import React, { useState } from 'react';
import './App.css';
import './SASS/quest.css';

import Question from './Components/Question'
import Result from './Components/Result'

function App() {

  const [weights, setWeights] = useState({
    white: 0,
    black: 0,
    sdoba: 0,
    lavash: 0,
    pizza: 0,
    chiabutta: 0,
    tortilia: 0,
  })

  const [questionIndex, setQuestionIndex] = useState(0)


  const createWeights = (weights) => {
    return {
      white: weights[0],
      black: weights[1],
      sdoba: weights[2],
      lavash: weights[3],
      pizza: weights[4],
      chiabutta: weights[5],
      tortilia: weights[6],
    }
  }

  const AddWeight = (value) => {
    const newWeights = {}
    for (let key in value) {
      newWeights[key] = weights[key] + value[key]
    }
    setWeights(newWeights)
    setQuestionIndex(questionIndex + 1)
  }

  const questions = [
    <Question
      addFunction={AddWeight}
      text={'К какой кухни вы себя относите?'}
    >
      <div weights={createWeights([1, 1, 0.25, 0, 1, 1, 1])}>
        Европейская
        </div>
      <div weights={createWeights([1, 1, 1, 1, 0, 0, 0])}>
        Восточная
        </div>
    </Question>,
    <Question
      addFunction={AddWeight}
      text={'Ваш рост?'}
    >
      <div weights={createWeights([0, 0, 0, 1, 1, 0.25, 1])}>
        Низкий
      </div>
      <div weights={createWeights([1, 1, 1, 0, 0, 0, 0])}>
        Высокий
      </div>
    </Question>,
    <Question
      addFunction={AddWeight}
      text={'В вас есть изюменка?'}
    >
      <div weights={createWeights([0, 0.75, 0.9, 0, 1, 0.25, 0.25])}>
        Да
    </div>
      <div weights={createWeights([1, 0.25, 0, 1, 0, 0.75, 0.75])}>
        Нет
    </div>
    </Question>,
    <Question
      addFunction={AddWeight}
      text={'Вы забываете что-то...?'}
    >
      <div weights={createWeights([0.7, 0.3, 0.1, 0, 0, 1, 0])}>
        Часто
    </div>
      <div weights={createWeights([0.3, 0.7, 0.9, 1, 1, 0, 1])}>
        Редко
    </div>
    </Question>,
    <Question
      addFunction={AddWeight}
      text={'Вы видете себя фигурой?'}
    >
      <div weights={createWeights([1, 1, 0.1, 0, 0, 0.2, 0])}>
        Квадрат
    </div>
      <div weights={createWeights([0, 0, 0.9, 1, 1, 0.8, 1])}>
        Круг
    </div>
    </Question>,
    <Question
      addFunction={AddWeight}
      text={'Представте пейзаж, вы видите?'}
    >
      <div weights={createWeights([1, 1, 0.7, 0, 0, 0, 0])}>
        Горый, холмы
    </div>
      <div weights={createWeights([0, 0, 0.3, 1, 1, 1, 1])}>
        Поляны, равнины
    </div>
    </Question>,
    <Question
      addFunction={AddWeight}
      text={'Вы чаще всего ...?'}
    >
      <div weights={createWeights([0.5, 0.8, 0.1, 0.5, 0, 0.5, 0])}>
        Грустный
    </div>
      <div weights={createWeights([0.5, 0.2, 0.9, 0.5, 1, 0.5, 1])}>
        Счастиливый
    </div>
    </Question>,
    <Question
      addFunction={AddWeight}
      text={'Вы носите одежду?'}
    >
      <div weights={createWeights([0, 1, 0.25, 0.3, 0.1, 0.3, 0.45])}>
        Тёмных тонов
    </div>
      <div weights={createWeights([1, 0, 0.75, 0.7, 0.9, 0.7, 0.45])}>
        Светлых тонов
    </div>
    </Question>,
    <Question
      addFunction={AddWeight}
      text={'Вы помогаете кому-то?'}
    >
      <div weights={createWeights([0, 0, 0.75, 0.1, 1, 0.05, 1])}>
        Часто
    </div>
      <div weights={createWeights([1, 1, 0.25, 0.9, 0, 0.95, 0])}>
        Редко
    </div>
    </Question>,
    <Question
      addFunction={AddWeight}
      text={'В компании вы?'}
    >
      <div weights={createWeights([0, 0, 0.6, 0, 1, 0, 1])}>
        Центр внимания
    </div>
      <div weights={createWeights([1, 1, 0.4, 1, 0, 1, 0])}>
        Особо не выделяетесь
    </div>
    </Question>
    // <Question
    //   addFunction={AddWeight}
    //   text={'К какой кухни вы себя относите?'}
    // >
    //   <div weights={createWeights([1, 1, 0.25, 0, 1, 1, 1])}>
    //     Европейская
    // </div>
    //   <div weights={createWeights([1, 1, 1, 1, 0, 0, 0])}>
    //     Восточная
    // </div>
    // </Question>,
    // <Question
    //   addFunction={AddWeight}
    //   text={'К какой кухни вы себя относите?'}
    // >
    //   <div weights={createWeights([1, 1, 0.25, 0, 1, 1, 1])}>
    //     Европейская
    // </div>
    //   <div weights={createWeights([1, 1, 1, 1, 0, 0, 0])}>
    //     Восточная
    // </div>
    // </Question>,
  ]


  console.log(weights)

  return (
    <div className="App fullSize bg-g-blue-field">
      {questionIndex < questions.length
        ? questions[questionIndex]
        : <Result weights={weights} />}
    </div>
  );
}

export default App;
