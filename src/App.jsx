import { useState } from 'react';
import { TaskInput, TasksList, Controls } from './components';
import useLocalStorage from './hook/useLocaleStorage';
// const initialTasks = [
//   {
//     id: 1,
//     name: 'Learn React',
//     completed: true,
//   },
//   {
//     id: 2,
//     name: 'Learn JavaScript',
//     completed: false,
//   },
//   {
//     id: 3,
//     name: 'Learn xx',
//     completed: false,
//   },
//   {
//     id: 4,
//     name: 'Learn xxxx',
//     completed: false,
//   },
//   {
//     id: 5,
//     name: 'Learn xxxxxx',
//     completed: false,
//   },
//   {
//     id: 6,
//     name: 'Learn cccccc',
//     completed: false,
//   },
// ];

function App() {
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const [selectedTask, setSelectedTask] = useState(null);
  const [sortBy, setSortBy] = useState('all');

  let sortedTasks;

  if (sortBy === 'all') sortedTasks = tasks;
  if (sortBy === 'pending')
    sortedTasks = tasks.slice().filter((task) => !task.completed);

  if (sortBy === 'completed')
    sortedTasks = tasks.slice().filter((task) => task.completed);

  // let sortedTasks = tasks;
  function handleTaskOperation(taskData) {
    // setTasks((tasks) => [...tasks, newTask]);
    if (taskData.type === 'insert') {
      delete taskData.type;
      setTasks([...tasks, taskData]);
    } else {
      delete taskData.type;

      const updatedTasks = tasks.map((task) =>
        task.id === taskData.id ? { ...taskData } : task
      );
      setTasks(updatedTasks);
      setSelectedTask(null);
    }
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

  function handleSelecteTask(id) {
    setSelectedTask(tasks.find((task) => task.id === id));
    // console.log(selectedTask);

    // if (id === selectedTask.id) {
    //   setTasks((tasks) =>
    //     tasks.map((task) =>
    //       task.id === id ? { ...task, name: task.name } : task
    //     )
    //   );
    // }

    // const id = task.id;
    // setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleClearAllTasks() {
    if (!tasks.length) return;
    const confirmed = window.confirm('Are you sure you want to clear items');

    if (confirmed) setTasks([]);
  }

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }, [tasks]);

  // useEffect(() => {
  //   const tasks = JSON.parse(localStorage.getItem('tasks'));
  //   if (tasks) {
  //     setTasks(tasks);
  //   }
  // }, []);

  return (
    <div className="app">
      <TaskInput onAddTask={handleTaskOperation} selectedTask={selectedTask} />
      <Controls
        sortBy={sortBy}
        setSortBy={setSortBy}
        onClearTasks={handleClearAllTasks}
      />
      <TasksList
        tasks={sortedTasks}
        onToggleTask={handleToggleTask}
        onRemoveTask={handleRemoveTask}
        onSelectTask={handleSelecteTask}
      />
    </div>
  );
}

export default App;
