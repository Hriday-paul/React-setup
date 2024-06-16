import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";

const Rout = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [{
            path: '/',
            element: <Home />
        }]
    },
]);

export default Rout