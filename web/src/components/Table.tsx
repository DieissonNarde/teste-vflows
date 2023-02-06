import { HiSearchCircle } from 'react-icons/hi';

export function Table() {
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
        <tr>
          <td className="px-6 py-4 text-xl font-semibold text-gray-900 text-center whitespace-nowrap">
            <div className="flex gap-8">
              <input
                type="checkbox"
                className="bg-white p-4 appearance-none checked:bg-blue cursor-pointer"
                name="select"
                id="select"
              />
              Titulo do contrato
            </div>
          </td>
          <td className="px-6 py-4 text-xl font-semibold text-gray-900 text-center whitespace-nowrap">
            0820231303
          </td>
          <td className="px-6 py-4 bg-blue text-xl font-semibold text-white text-center whitespace-nowrap">
            5%
          </td>
          <td className="text-xl font-semibold text-gray-900  whitespace-nowrap">
            <HiSearchCircle className="text-5xl mx-auto text-blue" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
