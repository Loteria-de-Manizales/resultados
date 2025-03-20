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
      
      <div className="mt-2 sm:mt-3 md:mt-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 sm:mb-3 md:mb-4">Premios Sorteados</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-[#e9be6c]">
            <thead>
              <tr className="bg-[#e9be6c] text-[#1a428a]">
                <th className="border border-[#e9be6c] px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">PREMIO</th>
                <th className="border border-[#e9be6c] px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">VALOR</th>
                <th className="border border-[#e9be6c] px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">NÚMERO</th>
                <th className="border border-[#e9be6c] px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">SERIE</th>
              </tr>
            </thead>
            <tbody>
              {premios.map((premio) => {
                const premioGuardado = premiosSorteados[premio.titulo] || {};

                return (
                  <tr key={premio.titulo} className="border border-[#e9be6c]">
                    <td className="border border-[#e9be6c] px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{premio.titulo}</td>
                    <td className="border border-[#e9be6c] px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-lg sm:text-xl md:text-xl lg:text-2xl">{premio.valor}</td>
                    <td className="border border-[#e9be6c] px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{premioGuardado.numero || "-"}</td>
                    <td className="border border-[#e9be6c] px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{premioGuardado.serie || "-"}</td>
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
// import premios from "../data/PlanDePremiosMoto2025.json";
// import SorteoInfo from "../components/SorteoInfo"; // Importar el nuevo componente

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
//     <div>
//       {/* Incluir el componente SorteoInfo debajo del NavBar */}
//       <SorteoInfo />
      
//       <div className="mt-4 text-center">
//         <h1 className="text-8xl mb-4">Premios Sorteados</h1>
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full border-collapse border border-[#e9be6c]">
//             <thead>
//               <tr className="bg-[#e9be6c] text-[#1a428a]">
//                 <th className="border border-[#e9be6c] px-4 py-2 text-5xl">PREMIO</th>
//                 <th className="border border-[#e9be6c] px-4 py-2 text-5xl">VALOR</th>
//                 <th className="border border-[#e9be6c] px-4 py-2 text-5xl">NÚMERO</th>
//                 <th className="border border-[#e9be6c] px-4 py-2 text-5xl">SERIE</th>
//               </tr>
//             </thead>
//             <tbody>
//               {premios.map((premio) => {
//                 const premioGuardado = premiosSorteados[premio.titulo] || {};

//                 return (
//                   <tr key={premio.titulo} className="border border-[#e9be6c]">
//                     <td className="border border-[#e9be6c] px-4 py-2 text-5xl">{premio.titulo}</td>
//                     <td className="border border-[#e9be6c] px-4 py-2 text-2xl">{premio.valor}</td>
//                     <td className="border border-[#e9be6c] px-4 py-2 text-5xl">{premioGuardado.numero || "-"}</td>
//                     <td className="border border-[#e9be6c] px-4 py-2 text-5xl">{premioGuardado.serie || "-"}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PremiosSorteados;
