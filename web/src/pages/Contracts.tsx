import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IContract } from '../@types/contracts';
import { Footer } from '../components/Footer';
import { GroupButtons } from '../components/GroupButtons';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Table } from '../components/Table';
import { AuthContext } from '../contexts/AuthContext';
import { ContractContext } from '../contexts/ContractContext';
import api from '../services/api';

export function Contracts() {
  const [contracts, setContracts] = useState<Array<IContract>>([]);
  const [selectedContract, setSelectedContract] = useState<Array<string>>([]);

  const { user } = useContext(AuthContext);
  const { updateContract } = useContext(ContractContext);

  const navigate = useNavigate();

  function handleClick() {
    if (selectedContract.length === 1) {
      const contract = contracts.find(
        (contract) => contract.codigoDoContrato === selectedContract[0]
      );
      contract && updateContract(contract);

      navigate('/invoice');
    } else if (selectedContract.length > 1) {
      alert('Somente um Contrato deverá ser selecionado');
    } else {
      alert('Ao menos um Contrato deverá ser selecionado');
    }
  }

  useEffect(() => {
    async function getUserContracts() {
      const cnpj = user?.cnpj;
      const response = await api.post('/contracts/', { cnpj });

      if (response.status === 200) {
        setContracts(response.data.contracts);
      } else {
        console.error('CNPJ sem contratos ativos');
        alert('CNPJ sem contratos ativos');
      }
    }
    getUserContracts();
  }, []);

  return (
    <Layout width={'w-3/5'}>
      <Header titlePage="Contratos Vinculados" user={user} />
      <Table
        contracts={contracts}
        selectedContract={selectedContract}
        setSelectedContract={setSelectedContract}
      />
      <GroupButtons toLinkBack="/" typeSecondButton="button" handleAction={handleClick} />
      <Footer />
    </Layout>
  );
}
