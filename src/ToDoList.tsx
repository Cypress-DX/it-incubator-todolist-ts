import React from "react";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    task: Array<TaskType>
}

export const ToDoList = (props: PropsType) => {
    const task = props.task.map( e => {
        return (
            <li key={e.id}><input type="checkbox" checked={e.isDone}/> <span>{e.title}</span></li>
        )
    })
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {task}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}