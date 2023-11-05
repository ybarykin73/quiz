import Quiz from '../quiz/Quiz'

import './Main.css'

const quiz = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iure! 1",
    answerOptions: ['var1 1', 'var1 2', 'var1 3', 'var1 4']
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iure! 2",
    answerOptions: ['var2 1', 'var2 2', 'var2 3', 'var2 4']
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iure! 3",
    answerOptions: ['var3 1', 'var3 2', 'var3 3', 'var3 4']
  }
]

const Main = () => {
  return (
    <main className='main'>
      <Quiz quiz = {quiz} />
    </main>
  )
}

export default Main