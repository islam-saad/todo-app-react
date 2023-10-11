import { useState } from 'react';
import { TaskInput, TasksList, Controls } from './components';
const initialTasks = [
  {
    id: 1,
    name: 'Learn React',
    completed: true,
  },
  {
    id: 2,
    name: 'Learn JavaScript',
    completed: false,
  },
  {
    id: 3,
    name: 'Learn xx',
    completed: false,
  },
  {
    id: 4,
    name: 'Learn xxxx',
    completed: false,
  },
  {
    id: 5,
    name: 'Learn xxxxxx',
    completed: false,
  },
  {
    id: 6,
    name: 'Learn cccccc',
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [sortBy, setSortBy] = useState('all');

  let sortedTasks;

  if (sortBy === 'all') sortedTasks = tasks;
  if (sortBy === 'pending')
    sortedTasks = tasks.slice().filter((task) => !task.completed);

  if (sortBy === 'completed')
    sortedTasks = tasks.slice().filter((task) => task.completed);

  // let sortedTasks = tasks;
  function handleAddTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleRemoveTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleEditTask(task) {
    if (task.completed) return;
    setSelectedTask(task);
    const id = task.id;
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleClearAllTasks() {
    if (!tasks.length) return;
    const confirmed = window.confirm('Are you sure you want to clear items');

    if (confirmed) setTasks([]);
  }

  return (
    <div className="app">
      <TaskInput onAddTask={handleAddTask} selectedTask={selectedTask} />
      <Controls
        sortBy={sortBy}
        setSortBy={setSortBy}
        onClearTasks={handleClearAllTasks}
      />
      <TasksList
        tasks={sortedTasks}
        onToggleTask={handleToggleTask}
        onRemoveTask={handleRemoveTask}
        onEditTask={handleEditTask}
      />
    </div>
  );
}

export default App;
