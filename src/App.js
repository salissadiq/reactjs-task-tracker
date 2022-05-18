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
  function setReminder() {
    console.log('Set reminder')
  }
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} setReminder={setReminder} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
