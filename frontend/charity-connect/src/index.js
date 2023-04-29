import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// TODO import components and loader functions

import Wrapper from "./components/Wrapper";
import Projects, { fetchProjects } from "./components/Projects";
import SingleProject, { fetchSingleProject } from './components/SingleProject';
import ProjectSearch, { fetchProjectSearch } from './components/ProjectSearch';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/projects",
        loader: fetchProjects,
        element: <Projects />
      },
      {
        path: "/projects/:project_id",
        loader: fetchSingleProject,
        element: <SingleProject />
      },
      {
        path: "/projects/search",
        loader: fetchProjectSearch,
        element: <ProjectSearch />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
