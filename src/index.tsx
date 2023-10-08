import React from 'react'
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import configureStore from './store'

const store = configureStore()

const router = createBrowserRouter([
    {
        path: "*",
        element: <App/>,
    },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

