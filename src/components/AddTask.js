import {useState} from 'react'


export default function AddTask({onAdd}) {
    const [formData, setFormData] = useState({
        task:"",
        day: "",
        reminder: false
    })
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => (
            {   ...prevFormData,
                [name] : type === 'checkbox' ? checked : value 
            }
        ))
    }

    function handleSubmit(event){
        event.preventDefault();
        if(!formData.task) return alert("Task can't be blank")
        onAdd(formData)      
    }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input 
                type="text" 
                name="task"
                onChange={handleChange} 
                value={formData.task}
                />
        </div>
        <div className="form-control">
            <label>Dat and time</label>
            <input 
                type="datetime-local" 
                name="day"
                onChange={handleChange}
                value={formData.day}

            />
        </div>
        <div className="form-control form-control-check">
        <label>Reminder</label>
            <input 
                type="checkbox" 
                name="reminder"
                onChange={handleChange} 
                checked={formData.reminder}
            />
        </div>
        <div className="form-control">
            <input type="submit" className="btn btn-block" />
        </div>
    </form>
  )
}
