import {FC} from 'react'
import Header from './Components/Header/Header'
import TodoHeader from './Components/TodoHeader/TodoHeader'
import TodoList from './Components/TodoList/TodoList'
import TaskStore from './Store/TodoStore'
import {observer} from 'mobx-react-lite'
import SelectStore from './Store/SelectStore'

const App: FC = observer(() => {
  return (
    <div>
      <Header/>
      <section>
        <TodoHeader/>
      </section>
      <div className="container">
        <h2 className="task__title">Список задач</h2>
        {SelectStore.selectedOption === 'all' &&
            <TodoList taskData={TaskStore.allTasks} />
        }

        {SelectStore.selectedOption === 'active'
          ? <TodoList taskData={TaskStore.todos}/>
          : <TodoList taskData={TaskStore.completedTodos}/>
        }
      </div>
    </div>
  )
})

export default App