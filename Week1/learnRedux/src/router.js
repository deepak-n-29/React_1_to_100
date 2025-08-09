import { createBrowserRouter } from "react-router";
import Dashboard from "./Dashboard";
import Counter from "./counter/Counter";


const router = createBrowserRouter([
    {index: true, path: "/", Component: Dashboard},
    {path: "/Counter", Component: Counter},

])

export default router;