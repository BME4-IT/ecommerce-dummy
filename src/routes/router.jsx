import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RootLayout from "../layouts/RootLayout";
import CatalogPage from "../pages/CatalogPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/catalog",
                element: <CatalogPage/>
            }
        ]
    }
])

export default router;