import React, { useRef } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo }) => {
    // console.log("Rendering TodoList");

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
            ))}
        </div>
    );
};

export default React.memo(TodoList);
 