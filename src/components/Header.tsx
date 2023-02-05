import { ContainerBorder } from './ContainerBorder';
import { Logo } from './Logo';
import { Title } from './Title';
import { Text } from './Text';

export function Header() {
  return (
    <div>
      <div className="pb-6 flex items-center justify-start gap-48">
        <Logo />
        <Title title={'Pagamento de Fornecedores'} />
      </div>
      <ContainerBorder>
        <div className="flex justify-between gap-40">
          <div className="flex gap-4">
            <Text bold={true} text={'Razão Social:'} />
            <Text bold={false} text={'Razão Social do Fornecedor Logado'} />
          </div>
          <div className="flex gap-4">
            <Text bold={true} text={'CNPJ:'} />
            <Text bold={false} text={'000000000'} />
          </div>
        </div>
        <div className="flex justify-start gap-4 mt-4">
          <Text bold={true} text={'Nome Fantasia:'} />
          <Text bold={false} text={'Nome Fantasia do Fornecedor Logado'} />
        </div>
      </ContainerBorder>
      <ContainerBorder margin={'mt-4'}>
        <div className="text-center">
          <Text bold={true} text={'Contratos Vinculados'} />
        </div>
      </ContainerBorder>
    </div>
  );
}
