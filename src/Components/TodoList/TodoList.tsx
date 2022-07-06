import {FC} from 'react'
import classes from './TodoList.module.scss'
import TodoItem from '../TodoItem/TodoItem'
import {observer} from 'mobx-react-lite'
import TodoStore from '../../Store/TodoStore'

const TodoList: FC = observer(() => {
  return (
    <ul className={classes.todo} style={{marginTop: '50px'}}>
      { TodoStore.todos.map( item => <TodoItem todoItem={item} key={item.id} /> )}
    </ul>
  )
})

export default TodoList