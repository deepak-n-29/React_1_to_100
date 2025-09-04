import React, { useState, useEffect, useCallback, useMemo} from "react";
import useGetTodoData from "./useGetTodoData";
import TodoSearch from "./TodoSearch";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

const TodoApp = () => {
    const { todos } = useGetTodoData();
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        setTodoList(todos);
    }, [todos]);

    const filterOptions = {
        all: () => true,
        completed: (todo) => todo.completed,
        active: (todo) => !todo.completed,
    };

    const toggleTodo = useCallback((id) => {
        setTodoList((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }, []);

    const filteredTodos = useMemo(() => {
        return todoList.filter((todo) => {
            return (
                filterOptions[filter](todo) &&
                todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
    }, [todoList, filterOptions, filter, searchTerm]);

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <TodoSearch setSearchTerm={setSearchTerm} />
            <TodoFilter filter={filter} setFilter={setFilter} />
            <TodoList
                todos={filteredTodos}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default TodoApp;
