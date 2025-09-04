import React from "react";

const TodoItem = ({ todo, onToggle }) => {
    console.log(`Rendering TodoItem ${todo.id}`); 

    const handleToggle = () => {
        onToggle(todo.id);
    };

    return (
        <div className="flex items-center gap-2 p-2 border-b border-gray-200">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
                className="h-4 w-4"
            />
            <p>{todo.todo}</p>
        </div>
    );
};

export default React.memo(TodoItem);
