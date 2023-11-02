import './QuizLabel.css'

const QuizLabel = (props) => {
  const {
    name,
    question
  } = props

  return (
    <label className="quiz-label">
      <input className="quiz-label__input visually-hidden" type="radio" name={name} />
      <span className="quiz-label__check">question</span>
    </label>
  )
}

export default QuizLabel