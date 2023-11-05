import React from 'react'
import QuizLabel from '../subcomponents/quiz-label/QuizLabel'

import './Quiz.css'

const Quiz = (props) => {
  const {
    quiz
  } = props

  const [count, setCount] = React.useState(0)
  const [step, setStep] = React.useState(quiz[count])

  React.useEffect(() => {
    setStep(quiz[count])
  }, [count])

  if (count === quiz.length) {
    return (
      <div>
        result
      </div>
    )
  }

  return (
    <div className="quiz">
      <div className="quiz__header">
        <h1 className="quiz__title">Вопрос №{step.id}</h1>
        <p className="quiz__description">
          {step.question}
        </p>
      </div>
      <div className="quiz__body">
        {
          step.answerOptions.map((item, index) => <QuizLabel key={index} name='quiz' question={item} />)
        }
      </div>
      <div className="quiz__footer">
        <button onClick={() => setCount(count + 1)} className='quiz__button'>click me!</button>
      </div>
    </div>
  )
}

export default Quiz