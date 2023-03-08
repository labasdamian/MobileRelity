import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { CreateVote } from "./pages/CreateVote";
import { ListVotes } from "./pages/ListVotes";
import { SingleVote } from "./pages/SingleVote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/votes",
    element: <ListVotes />
  },
  {
    path: "/votes/:id",
    element: <SingleVote />
  },
  {
    path: "/votes/create",
    element: <CreateVote />
  }
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
