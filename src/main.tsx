import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/votes",
    element: <h1> Votes list</h1>
  },
  {
    path: "/votes/:id",
    element: <h1> Single vote</h1>
  },
  {
    path: "/votes/create",
    element: <h1> Create vote</h1>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
