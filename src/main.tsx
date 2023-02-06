import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/global.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login';
import { Contracts } from './pages/Contracts';
import { Invoice } from './pages/Invoice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/contracts',
    element: <Contracts />,
  },
  {
    path: '/invoice',
    element: <Invoice />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
