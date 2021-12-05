import React from "react"
const UP = -1
const DOWN = 1

export default function Task({ moveHandler, deleteHandler, item, id }) {

    return (
        <div id={id} className="text-light m-2 d-flex container bg-dark p-2 rounded justify-content-sm-between">

            <li className="h5 px-5">{item}</li>
            <div>
                <button
                    onClick={() => moveHandler(id, UP)}
                    className="btn mx-1 btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                    </svg></button>
                <button
                    onClick={() => moveHandler(id, DOWN)}
                    className="btn mx-1 btn-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </button>
                <button
                    onClick={() => deleteHandler(id)}
                    className="btn mx-1 btn-danger"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}