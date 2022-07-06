import {FC} from 'react'
import Button, {Colors} from '../UI/Button/Button'
import classes from './TodoItem.module.scss'
import ITodo from '../../Types/ITodo'
import {observer} from 'mobx-react-lite'

interface TodoItemProps {
  todoItem: ITodo
}

const TodoItem: FC<TodoItemProps> = observer((props) => {
  return (
    <li className={classes.task}>
      <div className={classes.taskGroup}>
        <input type="checkbox" checked={props.todoItem.isComplete} onChange={() => props.todoItem.isComplete} />
        <p>{props.todoItem.task}</p>
      </div>
      <Button color={Colors.red}>Удалить</Button>
    </li>
  )
})

export default TodoItem