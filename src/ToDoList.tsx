import React from "react";
import {filterType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number)=>void
    filteredTask: (value: filterType)=>void
}

export const ToDoList = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((m, i)=>{
                    return (
                    <li key={i}>
                        <input type="checkbox" checked={m.isDone}/>
                        <span>{m.title}</span>
                        <button onClick={()=>props.removeTask(m.id)}>X</button>
                    </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>props.filteredTask("All")}>All</button>
                <button onClick={()=>props.filteredTask("Active")}>Active</button>
                <button onClick={()=>props.filteredTask("Completed")}>Completed</button>
            </div>
        </div>
    )
}