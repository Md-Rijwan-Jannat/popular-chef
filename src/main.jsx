import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/Components/index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route/Route.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
