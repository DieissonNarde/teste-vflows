import { ContainerBorder } from './ContainerBorder';
import { Logo } from './Logo';
import { Title } from './Title';
import { Text } from './Text';
import { IUser } from '../@types/user';

interface HeaderProps {
  titlePage: string;
  user: IUser | undefined;
}

export function Header({ titlePage, user }: HeaderProps) {
  return (
    <div className="mb-4">
      <div className="pb-6 flex items-center justify-start gap-48">
        <Logo />
        <Title title={'Pagamento de Fornecedores'} />
      </div>
      <ContainerBorder>
        <div className="flex justify-between gap-40">
          <div className="flex gap-4">
            <Text bold={true} text={'Razão Social:'} />
            <Text text={user?.razaoSocial} />
          </div>
          <div className="flex gap-4">
            <Text bold={true} text={'CNPJ:'} />
            <Text text={user?.cnpj} />
          </div>
        </div>
        <div className="flex justify-start gap-4 mt-4">
          <Text bold={true} text={'Nome Fantasia:'} />
          <Text text={user?.nomeFantasia} />
        </div>
      </ContainerBorder>
      <ContainerBorder margin={'mt-4'}>
        <div className="text-center">
          <Text bold={true} text={titlePage} />
        </div>
      </ContainerBorder>
    </div>
  );
}
