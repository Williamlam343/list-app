import React, { useState } from "react"
import Task from "../Task"
import styles from "./Todo.module.css"
import Header from "../Header"
export default function Todo() {
    // sets the value of storage from localStorage or uses a default value if localStorage does not exist
    const [storage, setStorageUpdate] = useState(JSON.parse(localStorage.getItem("List"))
        || [{ task: "Task A", id: 1 }, { task: "Task B", id: 2 }, { task: "Task C", id: 3 }])

    const [input, setInput] = useState("")

    // values to determine direction to move a Task
    const UP = -1
    const DOWN = 1

    // constantly re-renders new data that is set to the localStorage if input exist
    if (!input) {
        localStorage.setItem("List", JSON.stringify(storage))
    }

    function moveHandler(id, direction) {
        // finds the position of a certain id in an array
        const position = storage.findIndex((item) => item.id === id)

        // logic to keep positon within 0 and storage.length 
        if (position < 0) { throw new Error("Given item not found.") }
        else if (direction === UP && position === 0 || direction === DOWN && position === storage.length - 1) { return }

        // saves the position to be spliced
        const item = storage[position]

        // removes the item that is being moved
        const newItems = storage.filter((i) => i.id !== id)

        // reAdds the item being moved into new position
        newItems.splice(position + direction, 0, item)

        // updates the storage to re-render components
        setStorageUpdate(newItems)

        // saves new array into localStorage
        localStorage.setItem("List", JSON.stringify(newItems))
    }

    function deleteHandler(id) {
        // removes target item from storage
        let filteredItem = storage.filter((item) => { return item.id !== id })

        // re-renders component by updating storage
        setStorageUpdate(filteredItem)

        // saves new the filtered array into localStorage
        localStorage.setItem("List", JSON.stringify(filteredItem))
    }


    function idHandler() {
        // creates an array of ids from storage
        let idArray = storage.map((item) => item.id)

        // if storage is empty re-starts the id from 1
        if (!idArray.length) {
            return 1
        }
        // increments the id by the maximum of the array + 1 to create unique ids
        return Math.max(...idArray) + 1
    }


    function addTaskHandler(e) {
        e.preventDefault();
        // if input is empty breaks out of function
        if (input === "") {
            return
        }
        // updates storage with new Task without mutating the storage
        setStorageUpdate([...storage, { task: input, id: idHandler() }])

        // clears search bar value after submit
        setInput("")
    }
    return (

        <>
            <div className="todo-padding borderRadiusBot bg-color-white">
                <h1 className="text-center text-upper textColor-brand">
                    List App
                </h1>
                <div className="divider" />
                <div>
                    <form
                        onSubmit={(e) => addTaskHandler(e)}
                        className="d-flex justify-content-between mtb-8">
                        <input
                            className={`${styles.inputBar} borderRadius-8`}
                            onChange={(e) => { setInput(e.target.value) }}
                            value={input} />
                        <button
                            className={`${styles.taskBtn} btn-focus-task borderRadius-8 text-light brandColor-bg`}>
                            Create Task</button>
                    </form>
                    <div className="brandColor-bg-10 borderRadius-8 task-list-padding">
                        <h2 className="text-center textColor-brand text-upper">Task List</h2>
                        <div className="divider" />
                        <div className="d-flex my-4 justify-content-center">
                            <ul>
                                {storage.map((item) => <Task
                                    key={item.id}
                                    id={item.id}
                                    item={item.task}
                                    deleteHandler={deleteHandler}
                                    moveHandler={moveHandler} />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
