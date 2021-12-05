import { useState, useEffect } from "react";
import Task from "./components/Task";


function App() {

  const storage = JSON.parse(localStorage.getItem("List"))
    || [{ task: "Task A", id: 1 }, { task: "Task B", id: 2 }, { task: "Task C", id: 3 }]
  useEffect(() => {

    localStorage.getItem("List")


  }, [])
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState(storage)

  if (!input) {
    localStorage.setItem("List", JSON.stringify(todo))
  }

  if (!storage) {
    let stringifiedData = JSON.stringify(todo)
    localStorage.setItem("List", stringifiedData)
  }


  function inputHandler(e) {
    setInput(e.target.value)
  }

  function addTaskHandler(e) {
    e.preventDefault();
    if (input === "") {
      return
    }
    setTodo([...todo, { task: input, id: todo.length + 1 }])
    setInput("")
  }


  return (

    <div className="container">
      <h1 className=" text-center">
        App-List
      </h1>
      <form onSubmit={(e) => addTaskHandler(e)}
        className="d-flex justify-content-center">
        <input
          onChange={
            (e) => {
              inputHandler(e)
            }

          }
          value={input}
        />
        <button
          onClick={() => { }}
          className="btn mx-1 btn-primary">Add Task</button>
      </form>
      <div className="d-flex my-4 justify-content-center">
        <ul>
          {todo.map((item) => <Task key={item.id} id={item.id} item={item.task} />

          )}


        </ul>
      </div>
    </div>

  );
}

export default App;
