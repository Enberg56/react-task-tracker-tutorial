import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([{
    id: 1,
    text: 'Doctors appointment',
    date: '05. feb at 10:00',
    reminder: true,
  },
  {
    id: 2,
    text: 'Party appointment',
    date: '10. feb at 12:00',
    reminder: false,

  },
  {
    id: 3,
    text: 'Cleanup Crew',
    date: '12. feb at 08:00',
    reminder: true,

  }])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTask([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
