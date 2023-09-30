import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/Components/index.css'
import toast, { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routers/Route';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>,
)
