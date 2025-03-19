import { useState, useEffect } from "react";
import premios from "../data/PlanDePremiosMoto2025.json";
import SorteoInfo from "../components/SorteoInfo"; // Importar el nuevo componente

function PremiosSorteados() {
  const [premiosSorteados, setPremiosSorteados] = useState({});

  useEffect(() => {
    // Añadir un event listener para actualizar la tabla cuando cambien los datos
    const handleStorageChange = () => {
      const storedData = JSON.parse(localStorage.getItem("premiosSorteados")) || {};
      setPremiosSorteados(storedData);
    };

    // Cargar datos iniciales
    handleStorageChange();

    // Escuchar cambios en localStorage
    window.addEventListener("storage", handleStorageChange);
    
    // Configurar un intervalo para verificar cambios periódicamente
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* Incluir el componente SorteoInfo debajo del NavBar */}
      <SorteoInfo />
      
      <div className="mt-4 text-center">
        <h1 className="text-8xl mb-4">Premios Sorteados</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-[#e9be6c]">
            <thead>
              <tr className="bg-[#e9be6c] text-[#1a428a]">
                <th className="border border-[#e9be6c] px-4 py-2 text-5xl">PREMIO</th>
                <th className="border border-[#e9be6c] px-4 py-2 text-5xl">VALOR</th>
                <th className="border border-[#e9be6c] px-4 py-2 text-5xl">NÚMERO</th>
                <th className="border border-[#e9be6c] px-4 py-2 text-5xl">SERIE</th>
              </tr>
            </thead>
            <tbody>
              {premios.map((premio) => {
                const premioGuardado = premiosSorteados[premio.titulo] || {};

                return (
                  <tr key={premio.titulo} className="border border-[#e9be6c]">
                    <td className="border border-[#e9be6c] px-4 py-2 text-5xl">{premio.titulo}</td>
                    <td className="border border-[#e9be6c] px-4 py-2 text-2xl">{premio.valor}</td>
                    <td className="border border-[#e9be6c] px-4 py-2 text-5xl">{premioGuardado.numero || "-"}</td>
                    <td className="border border-[#e9be6c] px-4 py-2 text-5xl">{premioGuardado.serie || "-"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PremiosSorteados;

// import { useState, useEffect } from "react";
// import premios from "../data/PlanDePremiosOrdinario2025.json";

// function PremiosSorteados() {
//   const [premiosSorteados, setPremiosSorteados] = useState({});

//   useEffect(() => {
//     // Añadir un event listener para actualizar la tabla cuando cambien los datos
//     const handleStorageChange = () => {
//       const storedData = JSON.parse(localStorage.getItem("premiosSorteados")) || {};
//       setPremiosSorteados(storedData);
//     };

//     // Cargar datos iniciales
//     handleStorageChange();

//     // Escuchar cambios en localStorage
//     window.addEventListener("storage", handleStorageChange);
    
//     // Configurar un intervalo para verificar cambios periódicamente
//     const interval = setInterval(handleStorageChange, 1000);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="mt-4 text-center">
//       <h1 className="text-xl mb-4">Premios Sorteados</h1>
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 px-4 py-2">PREMIO</th>
//               <th className="border border-gray-300 px-4 py-2">VALOR</th>
//               <th className="border border-gray-300 px-4 py-2">NÚMERO</th>
//               <th className="border border-gray-300 px-4 py-2">SERIE</th>
//             </tr>
//           </thead>
//           <tbody>
//             {premios.map((premio) => {
//               const premioGuardado = premiosSorteados[premio.titulo] || {};

//               return (
//                 <tr key={premio.titulo} className="border border-gray-300">
//                   <td className="border border-gray-300 px-4 py-2">{premio.titulo}</td>
//                   <td className="border border-gray-300 px-4 py-2">{premio.valor}</td>
//                   <td className="border border-gray-300 px-4 py-2">{premioGuardado.numero || "-"}</td>
//                   <td className="border border-gray-300 px-4 py-2">{premioGuardado.serie || "-"}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default PremiosSorteados;

// // import { useState, useEffect } from "react";
// // import premios from "../data/PlanDePremiosOrdinario2025.json";

// // function PremiosSorteados() {
// //   const [premiosSorteados, setPremiosSorteados] = useState({});

// //   useEffect(() => {
// //     const storedData = JSON.parse(localStorage.getItem("premiosSorteados")) || {};
// //     setPremiosSorteados(storedData);
// //   }, []);

// //   return (
// //     <div className="mt-4 text-center">
// //       <h1 className="text-xl mb-4">Premios Sorteados</h1>
// //       <div className="overflow-x-auto">
// //         <table className="table-auto w-full border-collapse border border-gray-300">
// //           <thead>
// //             <tr className="bg-gray-200">
// //               <th className="border border-gray-300 px-4 py-2">PREMIO</th>
// //               <th className="border border-gray-300 px-4 py-2">VALOR</th>
// //               <th className="border border-gray-300 px-4 py-2">NÚMERO</th>
// //               <th className="border border-gray-300 px-4 py-2">SERIE</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {premios.map((premio) => {
// //               const premioGuardado = premiosSorteados[premio.titulo] || {}; // Se usa el título como clave

// //               return (
// //                 <tr key={premio.titulo} className="border border-gray-300">
// //                   <td className="border border-gray-300 px-4 py-2">{premio.titulo}</td>
// //                   <td className="border border-gray-300 px-4 py-2">{premio.valor}</td>
// //                   <td className="border border-gray-300 px-4 py-2">{premioGuardado.numero || "-"}</td>
// //                   <td className="border border-gray-300 px-4 py-2">{premioGuardado.serie || "-"}</td>
// //                 </tr>
// //               );
// //             })}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // export default PremiosSorteados;