import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

export type filterType = "All" | "Active" | "Completed"

function App() {

    let [tasks, setTask] = useState([
        {id:1, title: 'HTML&CSSss', isDone: true},
        {id:2, title: 'JS&TS', isDone: true},
        {id:3, title: 'React', isDone: false},
        {id:4, title: 'NodeJS', isDone: true},
        {id:5, title: 'SQL', isDone: false},
    ])

    const removeTask = (id: number) => {
        setTask(tasks.filter(f=>f.id!==id));
    }

    let [filteredValue, setFilteredValue] = useState<filterType>("All")

    let isDoneTrue = tasks;

    if (filteredValue==="Active") {
        isDoneTrue=tasks.filter(f=>!f.isDone)
    }
    if(filteredValue==="Completed") {
        isDoneTrue=tasks.filter((f=>f.isDone))
    }

    const filteredTask = (value: filterType) => {
        setFilteredValue(value)
    }

    return (
        <div className="App">
            <ToDoList
                title={"What to learn"}
                tasks={isDoneTrue}
                removeTask={removeTask}
                filteredTask={filteredTask}
            />

        </div>
    );
}

export default App;
