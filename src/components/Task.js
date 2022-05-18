import {FaTimes} from 'react-icons/fa';
export default function Task({task, onDelete, onReminder}) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onReminder(task.id)} >
        <h3> {task.text} <FaTimes style={{color: 'red'}} onClick={()=>onDelete(task)} /> </h3>
        <p> {task.day} </p>
    </div>
  )
}
