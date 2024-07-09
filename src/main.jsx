import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './component/router/Router';
import './index.css'
import {
 
  RouterProvider
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<HelmetProvider>
<AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
</HelmetProvider>

  </React.StrictMode>,
)
