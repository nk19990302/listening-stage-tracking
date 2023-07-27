import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./container/Home";
import History from "./container/History";
import Signup from "./container/Singup";
import Login from "./container/Login";

const router = createBrowserRouter([
    { path: "/", Component: Home },
    { path: "/history", Component: History },
    { path: "/signup", Component: Signup },
    { path: "/login", Component: Login },
]);

function App() {
    return (
        <div className="page-wrapper">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
