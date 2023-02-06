import { PrivateRoutes } from './routes/private.routes';

import { AuthContext } from './contexts/AuthContext';
import { useContext } from 'react';
import { PublicRoutes } from './routes/public.routes';

export default function App(): JSX.Element {
  const { auth } = useContext(AuthContext);
  return auth ? <PrivateRoutes /> : <PublicRoutes />;
}
