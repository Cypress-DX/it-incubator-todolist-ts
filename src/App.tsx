import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

function App() {
    const task1 = [
        {id:1, title: 'HTML&CSSss', isDone: true},
        {id:2, title: 'JS&TS', isDone: true},
        {id:3, title: 'React', isDone: false},
    ]

    const task2 = [
        {id:1, title: 'HTML&CSS222', isDone: true},
        {id:2, title: 'JS&TS222', isDone: false},
        {id:3, title: 'React2222', isDone: false},
    ]

    return (
        <div className="App">
            <ToDoList title={"What to learn"} task={task1} />
            <ToDoList title={"What to eat"} task={task2} />

        </div>
    );
}

export default App;
