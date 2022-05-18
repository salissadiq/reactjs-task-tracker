import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: "Doctors appointment",
        day: "Feb 5 2022",
        reminder: false
    },
    {
        id: 2,
        text: "Doctors appointment",
        day: "Feb 5 2022",
        reminder: false
    },
    {
        id: 3,
        text: "FlexiSaf Interview",
        day: "Feb 5 2022",
        reminder: true
    }
]) 

const [showAddTask, setShowAddTask] = useState(false)

 function handleShowAddTask(){
  setShowAddTask(prevState => !prevState)
  }

  function handleDeleteTask(task) {
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
