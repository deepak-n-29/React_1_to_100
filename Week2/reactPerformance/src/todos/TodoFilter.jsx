import React from "react";

const TodoFilter = ({ filter, setFilter }) => {
    console.log("Rendering TodoFilter");

    const setAllFilter = () => setFilter("all");
    const setCompletedFilter = () => setFilter("completed");
    const setActiveFilter = () => setFilter("active");

    return (
        <div className="flex gap-2 mb-4">
            <button
                onClick={setAllFilter}
                className={`px-3 py-1 rounded ${
                    filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
            >
                All
            </button>
            <button
                onClick={setCompletedFilter}
                className={`px-3 py-1 rounded ${
                    filter === "completed"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                }`}
            >
                Completed
            </button>
            <button
                onClick={setActiveFilter}
                className={`px-3 py-1 rounded ${
                    filter === "active"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                }`}
            >
                Active
            </button>
        </div>
    );
};

export default TodoFilter;
