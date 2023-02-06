import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Contracts } from '../pages/Contracts';
import { Invoice } from '../pages/Invoice';
import { Login } from '../pages/Login';

export function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
}
