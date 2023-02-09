import { FormHelpers } from '@unform/core';
import { Form } from '@unform/web';
import { cnpj } from 'cpf-cnpj-validator';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Layout } from '../components/Layout';
import { Logo } from '../components/Logo';
import { AuthContext } from '../contexts/AuthContext';
import api from '../services/api';

interface IFormData {
  cnpj: string;
}

export function Login() {
  const { updateAuth, updateUser } = useContext(AuthContext);

  const formRef = useRef(null);
  const navigate = useNavigate();

  async function handleLogin(data: IFormData, { reset }: FormHelpers) {
    try {
      const schema = Yup.object({
        cnpj: Yup.string()
          .required('CNPJ é obrigatório')
          .test((value: string) => cnpj.isValid(value)),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post('/login', { cnpj });

      if (response.statusText == 'OK') {
        updateUser(response.data);
        updateAuth(true);
        navigate('/contracts');
      } else {
        updateAuth(false);
        console.error('CNPJ inválido');
        alert('CNPJ inválido');
      }

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.error(err);
        alert('CNPJ inválido');
      }
    }
  }

  return (
    <Layout width={'w-2/5'}>
      <div className="flex justify-center mb-12">
        <Logo />
      </div>

      <p className="mb-6 text-center text-2xl font-semibold uppercase">Pagamento de Fornecedor</p>
      <div className="mx-24 border border-slate-200 p-6">
        <Form ref={formRef} onSubmit={handleLogin} className="flex flex-col">
          <Input width={'w-full'} label={'cnpj'} type={'text'} name={'cnpj'} />
          <Button type={'submit'} text={'Acessar'} bgColor="bg-green" />
        </Form>
      </div>
    </Layout>
  );
}
