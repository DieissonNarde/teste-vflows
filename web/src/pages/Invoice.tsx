import { useContext } from 'react';
import { Button } from '../components/Button';
import { ContainerBorder } from '../components/ContainerBorder';
import { Footer } from '../components/Footer';
import { GroupButtons } from '../components/GroupButtons';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Layout } from '../components/Layout';
import { Text } from '../components/Text';
import { AuthContext } from '../contexts/AuthContext';

export function Invoice() {
  const { user } = useContext(AuthContext);

  async function sendData() {}

  return (
    <Layout width={'w-3/5'}>
      <Header user={user} titlePage="Dados da Nota Fiscal" />
      <ContainerBorder>
        <div className="flex gap-28">
          <div className="flex gap-4">
            <Text text={'Código do Contrato:'} bold={true} />
            <Text text={'231312121'} />
          </div>

          <Text text={'Titulo do contrato'} />
        </div>
        <div className="mt-8 flex gap-4 items-center">
          <Input width={'w-2/6'} label={'Número da Nota'} type={'text'} value={'a'} />
          <Input width={'w-2/6'} label={'Data de Emissão'} type={'date'} value={'a'} />
          <Input width={'w-2/6'} label={'Data de Vencimento'} type={'date'} value={'a'} />
          <Input width={'w-2/6'} label={'Valor'} type={'text'} value={'a'} />
        </div>

        <div>
          <div className="mt-8 mb-4">
            <input
              className="mr-4"
              type="checkbox"
              name="retencao-impostos"
              id="retencao-impostos"
            />
            <Text text={'Retenção de Impostos'} />
          </div>
          <ContainerBorder>
            <Text text={'Dados'} />
            <div className="mt-6 flex gap-4 items-center">
              <Input width={'w-2/12'} label={'ISSQN'} type={'text'} value={'a'} />
              <Input width={'w-2/12'} label={'IRRF'} type={'text'} value={'a'} />
              <Input width={'w-2/12'} label={'CSLL'} type={'text'} value={'a'} />
              <Input width={'w-2/12'} label={'COFINS'} type={'text'} value={'a'} />
              <Input width={'w-2/12'} label={'INSS'} type={'text'} value={'a'} />
              <Input width={'w-2/12'} label={'PIS'} type={'text'} value={'a'} />
            </div>
          </ContainerBorder>
        </div>

        <div>
          <div className="mt-20 mb-4">
            <input className="mr-4" type="checkbox" name="retencao-tecnica" id="retencao-tecnica" />
            <Text text={'Retenção Técnica'} />
          </div>

          <ContainerBorder>
            <Text text={'Dados'} />
            <div className="mt-6 flex gap-4 items-center">
              <Input width={'w-2/4'} label={'Valor'} type={'text'} value={'a'} />
              <Input width={'w-2/4'} label={'Percentual'} type={'text'} value={'a'} />
            </div>
          </ContainerBorder>
        </div>

        <div className="mb-8 flex items-center gap-8">
          <Button type={'button'} text={'Anexar Nota Fiscal'} bgColor={'bg-gray'} />
          <div>
            <p>Arquivo pdf</p>
          </div>
        </div>

        <GroupButtons toLinkBack="/contracts" handleAction={sendData} />
      </ContainerBorder>
      <Footer />
    </Layout>
  );
}
