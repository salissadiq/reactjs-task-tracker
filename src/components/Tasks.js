import Task from './Task'

export default function Tasks({tasks, onDelete, setReminder}) {
    
    const tasksElements = tasks.map(task=>(
        <Task key={task.id} task={task} setReminder={setReminder} onDelete={onDelete} />
    ))
  return (
    <div>{tasksElements}</div>
  )
}
