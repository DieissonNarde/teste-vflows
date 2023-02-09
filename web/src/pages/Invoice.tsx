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
import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import { IFormData } from '../@types/formInvoice';
import * as Yup from 'yup';
import { ContractContext } from '../contexts/ContractContext';


export function Invoice() {
  const { user } = useContext(AuthContext);
  const { contract } = useContext(ContractContext);

  async function sendData(data: IFormData) {
    try {
      const schema = Yup.object({
        : Yup.string()
          .required('CNPJ é obrigatório')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log('Solicitação 999999 foi enviada com sucesso.', data);
      reset();

      navigate('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.error(err);
      }
    }
  }

  return (
    <Layout width={'w-3/5'}>
      <Header user={user} titlePage="Dados da Nota Fiscal" />
      <Form onSubmit={sendData}>
        <ContainerBorder>
          <div className="flex gap-28">
            <div className="flex gap-4">
              <Text text={'Código do Contrato:'} bold={true} />
              <Text text={contract?.codigoDoContrato} />
            </div>

            <Text text={contract?.nomeDoContrato} />
          </div>
          <div className="mt-8 flex gap-4 items-center">
            <Scope path="invoice">
              <Input width={'w-2/6'} label={'Número da Nota'} type={'text'} name={'noteNumber'} />
              <Input width={'w-2/6'} label={'Data de Emissão'} type={'date'} name={'dateOfIssue'} />
              <Input width={'w-2/6'} label={'Data de Vencimento'} type={'date'} name={'dueDate'} />
              <Input width={'w-2/6'} label={'Valor'} type={'text'} name={'value'} />
            </Scope>
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
                <Scope path="taxes">
                  <Input width={'w-2/12'} label={'ISSQN'} type={'text'} name={'issqn'} />
                  <Input width={'w-2/12'} label={'IRRF'} type={'text'} name={'irrf'} />
                  <Input width={'w-2/12'} label={'CSLL'} type={'text'} name={'csll'} />
                  <Input width={'w-2/12'} label={'COFINS'} type={'text'} name={'cofins'} />
                  <Input width={'w-2/12'} label={'INSS'} type={'text'} name={'inss'} />
                  <Input width={'w-2/12'} label={'PIS'} type={'text'} name={'pis'} />
                </Scope>
              </div>
            </ContainerBorder>
          </div>

          <div>
            <div className="mt-20 mb-4">
              <input
                className="mr-4"
                type="checkbox"
                name="retencao-tecnica"
                id="retencao-tecnica"
              />
              <Text text={'Retenção Técnica'} />
            </div>

            <ContainerBorder>
              <Text text={'Dados'} />
              <div className="mt-6 flex gap-4 items-center">
                <Input width={'w-2/4'} label={'Valor'} type={'text'} name={'technical.value'} />
                <Input
                  width={'w-2/4'}
                  label={'Percentual'}
                  type={'text'}
                  name={'technical.percentage'}
                />
              </div>
            </ContainerBorder>
          </div>

          <div className="mb-8 flex items-center gap-8">
            <Button type={'button'} text={'Anexar Nota Fiscal'} bgColor={'bg-gray'} />
            <div>
              <p>Arquivo pdf</p>
            </div>
          </div>

          <GroupButtons
            toLinkBack="/contracts"
            typeSecondButton={'submit'}
          />
        </ContainerBorder>
      </Form>

      <Footer />
    </Layout>
  );
}
