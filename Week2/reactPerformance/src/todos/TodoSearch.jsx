import React, { useCallback } from "react";

const TodoSearch = ({ setSearchTerm }) => {
    console.log("Rendering TodoSearch");

    function handleSetSearchTerm(e) {
        setSearchTerm(e.target.value);
    }
 
    return (
        <input
            type="text"
            placeholder="Search todos..."
            onChange={handleSetSearchTerm}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
    );
};

export default React.memo(TodoSearch);
