import QuizLabel from '../subcomponents/quiz-label/QuizLabel'

import './Quiz.css'

const Quiz = () => {
  return (
    <div className="quiz">
      <div className="quiz__header">
        <h1 className="quiz__title">Вопрос №1</h1>
        <p className="quiz__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa rem sunt quod hic quas ad modi temporibus alias sint?</p>
      </div>
      <div className="quiz__body">
        {
          new Array(4).fill(null).map((item, index) => <QuizLabel key={index} name='quiz' question={index} />)
        }
      </div>
      <div className="quiz__footer">
        <button className='quiz__button'>click me!</button>
      </div>
    </div>
  )
}

export default Quiz