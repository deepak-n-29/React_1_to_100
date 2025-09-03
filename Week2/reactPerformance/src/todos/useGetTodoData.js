import axios from "axios";
import { useEffect, useState } from "react";

function useGetTodoData() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                "https://dummyjson.com/todos?limit=500"
            );
            setTodos(response.data?.todos);
        }

        fetchData();
    }, []);

    return { todos };
}

export default useGetTodoData;
