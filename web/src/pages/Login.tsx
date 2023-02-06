import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Layout } from '../components/Layout';
import { Logo } from '../components/Logo';
import { AuthContext } from '../contexts/AuthContext';
import api from '../services/api';

export function Login() {
  const [cnpj, setCnpj] = useState<string>('');
  const { updateAuth, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await api.post('/login', { cnpj });

    if (response.statusText == 'OK') {
      updateUser(response.data);
      updateAuth(true);
      navigate('/contracts');
    } else {
      updateAuth(false);
      console.error('CNPJ inválido');
    }
  }

  return (
    <Layout width={'w-2/5'}>
      <div className="flex justify-center mb-12">
        <Logo />
      </div>

      <p className="mb-6 text-center text-2xl font-semibold uppercase">Pagamento de Fornecedor</p>
      <div className="mx-24 border border-slate-200 p-6">
        <form onSubmit={handleLogin} className="flex flex-col">
          <Input width={'w-full'} label={'cnpj'} type={'text'} value={cnpj} setValue={setCnpj} />
          <Button type={'submit'} text={'Acessar'} bgColor="bg-green" />
        </form>
      </div>
    </Layout>
  );
}
