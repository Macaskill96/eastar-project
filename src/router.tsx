import {createBrowserRouter, Navigate} from "react-router-dom";
import MainPage from "./pages/MainPage";
import FinalPage from "./pages/FinalPage";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'home'}/>},
            {path:'home', element:<MainPage/>},
            {path: 'thanks', element: <FinalPage/>}
        ]}
]);

export {router}