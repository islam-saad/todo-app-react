import Task from './Task';

function TasksList({ tasks, onToggleTask, onRemoveTask, onSelectTask }) {
  if (!tasks.length)
    return (
      <h3 style={{ textAlign: 'center', marginTop: '10px' }}>
        Start Add Your Tasks
      </h3>
    );
  return (
    <ul className="task-box">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onRemoveTask={onRemoveTask}
          onSelectTask={onSelectTask}
        />
      ))}
    </ul>
  );
}

export default TasksList;
