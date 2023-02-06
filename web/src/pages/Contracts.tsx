import { useContext, useEffect, useState } from 'react';
import { IContracts } from '../@types/contracts';
import { Footer } from '../components/Footer';
import { GroupButtons } from '../components/GroupButtons';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Table } from '../components/Table';
import { AuthContext } from '../contexts/AuthContext';
import api from '../services/api';

export function Contracts() {
  const [contracts, setContracts] = useState<Array<IContracts>>([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function getUserContracts() {
      const cnpj = user?.cnpj;
      const response = await api.post('/contracts/', { cnpj });

      if (response.status === 200) {
        setContracts(response.data.contracts);
      } else {
        console.error('CNPJ sem contratos ativos');
      }
    }
    getUserContracts();
  }, []);

  return (
    <Layout width={'w-3/5'}>
      <Header titlePage="Contratos Vinculados" user={user} />
      <Table contracts={contracts} />
      <GroupButtons />
      <Footer />
    </Layout>
  );
}
