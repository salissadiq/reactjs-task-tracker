import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
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
  function handleDeleteTask(task) {
    let tasksArray = [...tasks]
    const index = tasksArray.indexOf(task)

    setTask()

  }
  console.log(tasks)
  function setReminder(id) {
    // console.log('Set reminder', task)
    setTask(prevTasks=>(
      prevTasks.map(task => (
        task.id === id ? {...task, reminder: !task.reminder} : task
      ))
    ))
  }
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onReminder={setReminder} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
