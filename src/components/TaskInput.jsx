import { useEffect, useState } from 'react';
function TaskInput({ onAddTask, selectedTask }) {
  const [name, setName] = useState('');
  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    let taskData = {};
    // const newTask = { id, name, completed: false };

    if (selectedTask) {
      taskData = { ...selectedTask, name: name, type: 'edit' };
    } else {
      taskData = { id, name, completed: false, type: 'insert' };
    }
    onAddTask(taskData);
    setName('');
  }

  useEffect(() => {
    if (selectedTask) {
      setName(selectedTask.name);
    }
  }, [selectedTask]);

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a New Task + Enter"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
}

export default TaskInput;
