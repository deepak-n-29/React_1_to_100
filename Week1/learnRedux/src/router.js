import { createBrowserRouter } from "react-router";
import Dashboard from "./Dashboard";
import Counter from "./counter/Counter";
import ShoppingPage from "./shopping/ShoppingPage";


const router = createBrowserRouter([
    {index: true, path: "/", Component: Dashboard},
    {path: "/Counter", Component: Counter},
    {path: '/shopping', Component: ShoppingPage}


])

export default router;