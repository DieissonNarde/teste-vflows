import { useState } from 'react';
import { HiSearchCircle } from 'react-icons/hi';
import { IContracts } from '../@types/contracts';

interface TableProps {
  contracts: Array<IContracts>;
  selectedContract: Array<string>;
  setSelectedContract: React.Dispatch<React.SetStateAction<Array<string>>>;
}

export function Table({ contracts, selectedContract, setSelectedContract }: TableProps) {
  function handleChange(codigoDoContrato: string) {
    if (selectedContract.includes(codigoDoContrato)) {
      setSelectedContract(selectedContract.filter((item) => item !== codigoDoContrato));
    } else {
      setSelectedContract([...selectedContract, codigoDoContrato]);
    }
  }

  return (
    <table className="w-full">
      <thead className="bg-gray">
        <tr>
          <th className="px-6 py-3 text-2xl font-bold text-center text-white tracking-wider">
            Nome do Contrato
          </th>
          <th className="px-6 py-3 text-2xl font-bold text-center text-white tracking-wider">
            Código do Contrato
          </th>
          <th className="px-6 py-3 text-2xl font-bold text-center text-white tracking-wider">
            Retenção Técnica
          </th>
          <th className="px-6 py-3 text-2xl font-bold text-center text-white tracking-wider">
            Detalhes
          </th>
        </tr>
      </thead>

      <tbody className="bg-gray-200 divide-y divide-white">
        {contracts.map((contract) => (
          <tr key={contract.codigoDoContrato}>
            <td className="px-6 py-4 text-xl font-semibold text-gray-900 text-center whitespace-nowrap">
              <div className="flex gap-8">
                <input
                  type="checkbox"
                  className="bg-white p-4 appearance-none checked:bg-blue cursor-pointer"
                  name="select"
                  id="select"
                  checked={selectedContract.includes(contract.codigoDoContrato)}
                  onChange={() => handleChange(contract.codigoDoContrato)}
                />
                {contract.nomeDoContrato}
              </div>
            </td>
            <td className="px-6 py-4 text-xl font-semibold text-gray-900 text-center whitespace-nowrap">
              {contract.codigoDoContrato}
            </td>
            <td className="px-6 py-4 bg-blue text-xl font-semibold text-white text-center whitespace-nowrap">
              {contract.retencaoTecnica}
            </td>
            <td className="text-xl font-semibold text-gray-900  whitespace-nowrap">
              <HiSearchCircle className="text-5xl mx-auto text-blue" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
