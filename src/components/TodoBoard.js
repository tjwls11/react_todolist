import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props){
    console.log("todoBoard", props.todoList);

    return (
        <div>
            <h1>My Todo List</h1>
            {props.todoList.map((item, index) => (
                <TodoItem key={index} item={item} onDelete={() => props.onDelete(index)} />
            ))}
        </div>
    );
}

export default TodoBoard;
