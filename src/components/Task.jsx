import { MdDeleteOutline } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';

function Task({ task, onToggleTask, onRemoveTask, onSelectTask }) {
  return (
    <li className="task">
      <label>
        <input
          type="checkbox"
          value={task.completed}
          onChange={() => onToggleTask(task.id)}
          checked={task.completed}
        />
        <p className={task.completed ? 'checked' : ''}>{task.name}</p>
      </label>

      <div className="actions">
        <span onClick={() => onSelectTask(task.id)}>
          <BiEdit />
        </span>
        <span onClick={() => onRemoveTask(task.id)}>
          <MdDeleteOutline />
        </span>
      </div>
    </li>
  );
}

export default Task;
