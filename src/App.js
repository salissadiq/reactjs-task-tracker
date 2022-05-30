import {useState, useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTask] = useState([
    
]) 

const [showAddTask, setShowAddTask] = useState(false)


  useEffect( ()=> {
    const getTasks = async () => {
      const tasksFromServer = await fetchTask()
      setTask(tasksFromServer)
    }
    getTasks()
  }, [])

  async function fetchTask() {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

 function handleShowAddTask(){
  setShowAddTask(prevState => !prevState)
  }

  async function handleDeleteTask(task) {
    await fetch(`http://localhost:5000/tasks/${task.id}`,
    {method: 'DELETE'}
    )
    let tasksArray = [...tasks]
    const index = tasksArray.indexOf(task)
    tasksArray.splice(index, 1)
    setTask(tasksArray);

  }
  function setReminder(id) {
    // console.log('Set reminder', task)
    setTask(prevTasks=>(
      prevTasks.map(task => (
        task.id === id ? {...task, reminder: !task.reminder} : task
      ))
    ))
  }

function addTask({task, day, reminder}){
  setTask(prevTasks =>(
    [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        text: task,
        day: day,
        reminder: reminder
      }
    ]
  ))
}

  return (
    <div className="container">
      <Header handleShowAddTask={handleShowAddTask} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onReminder={setReminder} onDelete={handleDeleteTask}  />
    </div>
  );
}

export default App;
