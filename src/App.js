import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react"


function App() {
  // const name = 'Gimna'
  // const x = true

  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th 2:30pm',
        reminder:true
    },
    {
        id:2,
        text:'Meeting at School',
        day:'Feb 6th 2:30pm',
        reminder:true
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Feb 5th 2:30pm',
        reminder:false
    }
])

// Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}

// Delete Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) =>{
  // setTasks(tasks.map(task) => task.id === id ? {} : ''))
  setTasks(tasks.map((task) => task.id === id ? {...task,reminder:!task.reminder} : task))
  // console.log('o')
}


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}


      {/* <h2>Hello {x ? 'Yes': 'No'}</h2> */}
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;