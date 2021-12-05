import { useState, useEffect } from "react";
import Task from "./components/Task";
const UP = -1
const DOWN = 1

function App() {

  const [storage, setStorageUpdate] = useState(JSON.parse(localStorage.getItem("List"))
    || [{ task: "Task A", id: 1 }, { task: "Task B", id: 2 }, { task: "Task C", id: 3 }])
  const [input, setInput] = useState("")


  function moveHandler(id, direction) {

    const position = storage.findIndex((item) => item.id === id)
    if (position < 0) {
      throw new Error("Given item not found.")
    } else if (direction === UP && position === 0 || direction === DOWN && position === storage.length - 1) {
      return
    }
    const item = storage[position]
    const newItems = storage.filter((i) => i.id !== id)
    newItems.splice(position + direction, 0, item)
    setStorageUpdate(newItems)
    localStorage.setItem("List", JSON.stringify(newItems))

  }

  function deleteHandler(id) {
    let filteredItem = storage.filter((item) => { return item.id !== id })
    console.log(filteredItem)
    setStorageUpdate(filteredItem)
    localStorage.setItem("List", JSON.stringify(filteredItem))

  }

  if (!input) {
    localStorage.setItem("List", JSON.stringify(storage))
  }

  if (!storage) {
    let stringifiedData = JSON.stringify(storage)
    localStorage.setItem("List", stringifiedData)
  }

  function idHandler() {

    let idArray = storage.map((item) => item.id)
    console.log(idArray.length)
    if (!idArray.length) {
      return 1
    }

    return Math.max(...idArray) + 1
  }


  function addTaskHandler(e) {
    e.preventDefault();
    if (input === "") {
      return
    }
    setStorageUpdate([...storage, { task: input, id: idHandler() }])
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
              setInput(e.target.value)
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
          {storage.map((item) => <Task
            key={item.id}
            id={item.id}
            item={item.task}
            deleteHandler={deleteHandler}
            moveHandler={moveHandler}
          />

          )}


        </ul>
      </div>
    </div>

  );
}

export default App;
