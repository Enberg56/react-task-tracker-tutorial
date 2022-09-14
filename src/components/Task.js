import { FaTimes } from 'react-icons/fa'
import dayjs from 'dayjs'

const Task = ({ task, onDelete, onToggle }) => {
  const formatedDate = (dayjs(task.date).format('DD.MMM.YYYY HH:MM'))
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} {' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)} />
      </h3>
      <p>{formatedDate}</p>

    </div>
  )
}

export default Task
