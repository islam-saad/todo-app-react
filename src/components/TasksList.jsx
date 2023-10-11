import Task from './Task';

function TasksList({ tasks, onToggleTask, onRemoveTask, onEditTask }) {
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
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
}

export default TasksList;
