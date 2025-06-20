import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";
import Home from "../pages/site/Home";

// Links

export const HOME = '/'


export const Router = createBrowserRouter([
    {
        element: <SiteLayout />,
        children: [
            {
                path: HOME,
                element: <Home />
            },
        ]
    },
])