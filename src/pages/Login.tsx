import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Layout } from '../components/Layout';
import { Logo } from '../components/Logo';

export function Login() {
  return (
    <Layout width={'w-2/5'}>
      <div className="flex justify-center mb-12">
        <Logo />
      </div>

      <p className="mb-6 text-center text-2xl font-semibold uppercase">Pagamento de Fornecedor</p>
      <div className="mx-24 border border-slate-200 p-6">
        <form className="flex flex-col">
          <Input width={'w-full'} label={'cnpj'} type={'text'} value={'cnpj'} />
          <Button text={'Acessar'} bgColor="bg-green" />
        </form>
      </div>
    </Layout>
  );
}
