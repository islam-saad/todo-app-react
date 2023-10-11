function Controls({ onClearTasks, sortBy, setSortBy }) {
  return (
    <div className="controls">
      <div className="filters">
        <span
          className={sortBy === 'all' ? 'active' : ''}
          onClick={() => setSortBy('all')}
        >
          All
        </span>
        <span
          className={sortBy === 'pending' ? 'active' : ''}
          onClick={() => setSortBy('pending')}
        >
          Pending
        </span>
        <span
          className={sortBy === 'completed' ? 'active' : ''}
          onClick={() => setSortBy('completed')}
        >
          Completed
        </span>
      </div>
      <button className="clear-btn" onClick={onClearTasks}>
        Clear All
      </button>
    </div>
  );
}

export default Controls;
