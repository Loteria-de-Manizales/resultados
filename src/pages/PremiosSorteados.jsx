import premios from "../data/PlanDePremiosOrdinario2025.json";

function PremiosSorteados() {
  return (
    <div className="mt-4 text-center">
      <h1 className="text-xl mb-4">Premios Sorteados</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">PREMIO</th>
              <th className="border border-gray-300 px-4 py-2">VALOR</th>
              <th className="border border-gray-300 px-4 py-2">NÚMERO</th>
              <th className="border border-gray-300 px-4 py-2">SERIE</th>
            </tr>
          </thead>
          <tbody>
            {premios.map((premio) => (
              <tr key={premio.id} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{premio.titulo}</td>
                <td className="border border-gray-300 px-4 py-2">{premio.valor}</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PremiosSorteados;
