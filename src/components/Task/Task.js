import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faArrowCircleUp, faArrowCircleDown, } from '@fortawesome/free-solid-svg-icons'
const UP = -1
const DOWN = 1

export default function Task({ moveHandler, deleteHandler, item, id }) {
    return (
        <div id={id} className="me-5 d-flex container justify-content-between">

            <h3 className="">{item}</h3>
            <div>
                <button
                    onClick={() => moveHandler(id, UP)}
                    className="btn-style">
                    <FontAwesomeIcon
                        icon={faArrowCircleUp}
                        className="h3 textColor-brand btn-focus" />
                </button>
                <button
                    onClick={() => moveHandler(id, DOWN)}
                    className="btn-style">
                    <FontAwesomeIcon
                        icon={faArrowCircleDown}
                        className="h3 textColor-brand btn-focus" />
                </button>
                <button
                    className="btn-style"
                    onClick={() => deleteHandler(id)}
                >
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="h3 textColor-red btn-focus-close" />

                </button>
            </div>
        </div>
    )
}