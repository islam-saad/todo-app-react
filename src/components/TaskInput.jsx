import { useEffect, useState } from 'react';
function TaskInput({ onAddTask, selectedTask }) {
  const [name, setName] = useState('');
  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newTask = { id, name, completed: false };

    onAddTask(newTask);
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
