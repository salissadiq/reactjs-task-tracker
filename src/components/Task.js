import {FaTimes} from 'react-icons/fa';
export default function Task({task, onDelete, setReminder}) {
  return (
    <div className="task">
        <h3> {task.text} <FaTimes style={{color: 'red'}} onDoubleClick={()=>setReminder(task)} onClick={()=>onDelete(task)} /> </h3>
        <p> {task.day} </p>
    </div>
  )
}
