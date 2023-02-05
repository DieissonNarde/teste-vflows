import { Footer } from '../components/Footer';
import { GroupButtons } from '../components/GroupButtons';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Table } from '../components/Table';

export function Contracts() {
  return (
    <Layout>
      <Header titlePage="Contratos Vinculados" />
      <Table />
      <GroupButtons />
      <Footer />
    </Layout>
  );
}
