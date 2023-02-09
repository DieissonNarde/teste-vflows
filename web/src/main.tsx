import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './contexts/AuthContext';
import ContractContext from './contexts/ContractContext';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ContractContext>
        <App />
      </ContractContext>
    </AuthProvider>
  </React.StrictMode>
);
