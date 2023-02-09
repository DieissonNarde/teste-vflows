import { createContext, ReactNode, useState } from 'react';
import { IContract } from '../@types/contracts';

interface ContractContextType {
  contract: IContract | undefined;
  updateContract: (contract: IContract) => void;
}

export const ContractContext = createContext({} as ContractContextType);

interface AuthProviderProps {
  children: ReactNode;
}

function ContractProvider({ children }: AuthProviderProps) {
  const [contract, setContract] = useState<IContract>();

  async function updateContract(contract: IContract) {
    setContract(contract);
  }

  return (
    <ContractContext.Provider value={{ contract, updateContract }}>
      {children}
    </ContractContext.Provider>
  );
}

export default ContractProvider;
