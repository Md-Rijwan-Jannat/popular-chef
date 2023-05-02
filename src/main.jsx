import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/Components/index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route/Route.jsx';
import AuthProvider from './Routes/Provider/AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
