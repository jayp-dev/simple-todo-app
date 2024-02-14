import { useState } from "react";
import "./App.css";
import Tasklist from "./Task_list";

function App() {
  const [TaskList, setTaskList] = useState([]);
  const [TaskValue, setTaskValue] = useState("");
  const [Edit, setEdit] = useState(null);

  function HandleSubmit(e) {
    e.preventDefault();
    setTaskList((TaskList) => [
      ...TaskList,
      { id: crypto.randomUUID(), task: TaskValue },
    ]);
    setTaskValue("");
  }

  function HandleDelete(c_delete) {
    setTaskList(TaskList.filter((task) => c_delete.id !== task.id));
  }
  function HandleEdit(c_edit) {
    setEdit(c_edit);
    setTaskValue(c_edit.task);
  }
  function HandleUpdate(e) {
    e.preventDefault();
    console.log(Edit);
    setTaskList(
      TaskList.map((task) =>
        Edit.id === task.id ? { ...task, id: Edit.id, task: TaskValue } : task
      )
    );
    setEdit(null);
    setTaskValue("");
  }

  return (
    <div className="App">
      <div className="container">
        <div id="newtask">
          <form onSubmit={Edit ? HandleUpdate : HandleSubmit}>
            <input
              type="text"
              placeholder="Add Tasks"
              value={TaskValue}
              onChange={(e) => setTaskValue(e.target.value)}
            />
            <button id="push" type="submit">
              {Edit ? "Update" : "Add"}
            </button>
          </form>
        </div>
        <div id="tasks">
          {TaskList.map((item) => (
            <Tasklist
              task={item}
              key={item.id}
              Ondelete={HandleDelete}
              OnEdit={HandleEdit}
            ></Tasklist>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
