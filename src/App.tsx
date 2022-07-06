import {FC} from 'react'
import Header from './Components/Header/Header'
import TodoHeader from './Components/TodoHeader/TodoHeader'
import TodoList from './Components/TodoList/TodoList'

const App: FC = () => {
  return (
    <div>
      <Header/>
      <section>
        <TodoHeader/>
      </section>
      <div className="container">
        <h1 style={{color: 'black', textAlign: 'center'}}>Список задач</h1>
        <TodoList/>
      </div>
    </div>
  )
}

export default App