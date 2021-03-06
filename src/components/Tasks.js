import Task from './Task'

export default function Tasks({tasks, onDelete, onReminder}) {
    
    const tasksElements = tasks.map(task=>(
        <Task key={task.id} task={task} onReminder={onReminder} onDelete={onDelete} />
    ))
  return (
    <div>
      {tasks.length > 0 ? tasksElements : 'No Tasks'}
      </div>

  )
}
