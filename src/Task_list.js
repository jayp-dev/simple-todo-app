function Tasklist({ task, Ondelete, OnEdit }) {
  return (
    <div className="task" key={task.id}>
      <span id={task.id}>{task.task}</span>
      <button className="delete" onClick={(e) => Ondelete(task)}>
        <i className="far fa-trash-alt">❌</i>
      </button>
      <button className="edit" onClick={(e) => OnEdit(task)}>
        Edit
      </button>
    </div>
  );
}

export default Tasklist;
