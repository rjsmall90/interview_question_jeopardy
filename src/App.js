import Categories from './components/cards/categories'
import PointCard from './components/cards/point_card'
import AnswerCard from './components/cards/answer_card'
import QuestionOptions from './components/cards/question_options'

function App() {
  return (
    <div className="App">
      <header style={{textAlign: 'center', color: 'blue'}}>
        <h1> Interview Question Jeapordy </h1>
      </header>
      
        <Categories />
        <PointCard />
        <AnswerCard />
        <QuestionOptions />
    </div>
  );
}

export default App