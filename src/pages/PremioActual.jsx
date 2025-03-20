import { useState, useEffect, useRef } from "react";
import premios from "../data/PlanDePremiosMoto2025.json";
import SorteoInfo from "../components/SorteoInfo"; // Importar el nuevo componente

function PremioActual() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numRefs = [useRef(), useRef(), useRef(), useRef()];
  const serieRefs = [useRef(), useRef()];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const resetInputs = () => {
      numRefs.forEach(ref => { if (ref.current) ref.current.value = ""; });
      serieRefs.forEach(ref => { if (ref.current) ref.current.value = ""; });
      if (numRefs[0].current) numRefs[0].current.focus();
    };

    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "s") {
        saveCurrentInputs();
        // No incrementamos el índice aquí, ya que se incrementa en saveCurrentInputs()
      } else if (e.key.toLowerCase() === "w") {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + premios.length) % premios.length);
        resetInputs();
      } else if (e.key.toLowerCase() === "q") {
        // Nueva funcionalidad: Borrar todos los datos del localStorage
        localStorage.removeItem("premiosSorteados");
        console.log("Todos los premios sorteados han sido eliminados");
        resetInputs();
      } else if (e.key.toLowerCase() === "e") {
        // Nueva funcionalidad: Avanzar al siguiente premio sin guardar
        setCurrentIndex((prevIndex) => (prevIndex + 1) % premios.length);
        resetInputs();
      }
    };

    const saveCurrentInputs = () => {
      const numero = numRefs.map(ref => ref.current?.value || "").join("");
      const serie = serieRefs.map(ref => ref.current?.value || "").join("");
      
      if (numero.length === 4 && serie.length === 3) {
        let storedData = JSON.parse(localStorage.getItem("premiosSorteados")) || {};
        // Usar el título del premio como clave en lugar del índice
        storedData[premios[currentIndex].titulo] = { numero, serie };
        localStorage.setItem("premiosSorteados", JSON.stringify(storedData));
        
        // Incrementar el índice solo una vez aquí
        setCurrentIndex((prevIndex) => (prevIndex + 1) % premios.length);
        resetInputs();
      }
    };

    resetInputs();
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const handleInput = (e, index, refs, nextRefs, maxLen = 1) => {
    e.target.value = e.target.value.replace(/\D/g, ""); // Permite solo números

    if (e.target.value.length >= maxLen) {
      if (index < refs.length - 1) {
        refs[index + 1].current.focus();
      } else if (nextRefs) {
        nextRefs[0].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index, refs, prevRefs) => {
    if (e.key.toLowerCase() === "a") {
      if (index > 0) {
        refs[index - 1].current.focus();
      } else if (prevRefs) {
        prevRefs[prevRefs.length - 1].current.focus();
      }
    } else if (e.key.toLowerCase() === "d") {
      if (index < refs.length - 1) {
        refs[index + 1].current.focus();
      } else if (prevRefs) {
        prevRefs[0].current.focus();
      }
    }
  };

  return (
    <div>
      {/* Incluir el componente SorteoInfo debajo del NavBar */}
      <SorteoInfo />
      
      <div className="mt-4 text-center">
        <p className="text-5xl md:text-4xl sm:text-3xl font-bold text-center px-2">
          PREMIO {premios[currentIndex].titulo} POR {premios[currentIndex].valor}
        </p>
        <div className="grid grid-cols-2 mt-4 text-lg md:pl-4 lg:pl-20 xl:pl-40">
          <div className="text-center text-4xl md:text-3xl sm:text-2xl font-bold">NÚMERO</div>
          <div className="text-center text-4xl md:text-3xl sm:text-2xl font-bold">SERIE</div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 md:pl-4 lg:pl-20 xl:pl-40">
          <div className="flex justify-center gap-3 sm:gap-1 md:gap-2">
            {numRefs.map((ref, i) => (
              <input
                key={i}
                ref={ref}
                type="text"
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-26 md:h-26 lg:w-30 lg:h-30 xl:w-40 xl:h-40 text-center border-4 md:border-6 xl:border-8 border-[#e9be6c] rounded-full bg-white text-[#1a428a] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold caret-transparent"
                maxLength="1"
                onInput={(e) => handleInput(e, i, numRefs, serieRefs)}
                onKeyDown={(e) => handleKeyDown(e, i, numRefs, serieRefs)}
              />
            ))}
          </div>

          <div className="flex justify-center gap-3 sm:gap-1 md:gap-2">
            {serieRefs.map((ref, i) => (
              <input
                key={i}
                ref={ref}
                type="text"
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-26 md:h-26 lg:w-30 lg:h-30 xl:w-40 xl:h-40 text-center border-4 md:border-6 xl:border-8 border-[#e9be6c] rounded-full bg-white text-[#1a428a] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold caret-transparent"
                maxLength={i === 0 ? "2" : "1"}
                onInput={(e) => handleInput(e, i, serieRefs, null, i === 0 ? 2 : 1)}
                onKeyDown={(e) => handleKeyDown(e, i, serieRefs, numRefs)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremioActual;

// import { useState, useEffect, useRef } from "react";
// import premios from "../data/PlanDePremiosMoto2025.json";
// import SorteoInfo from "../components/SorteoInfo"; // Importar el nuevo componente

// function PremioActual() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const numRefs = [useRef(), useRef(), useRef(), useRef()];
//   const serieRefs = [useRef(), useRef()];

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(() => {
//     const resetInputs = () => {
//       numRefs.forEach(ref => { if (ref.current) ref.current.value = ""; });
//       serieRefs.forEach(ref => { if (ref.current) ref.current.value = ""; });
//       if (numRefs[0].current) numRefs[0].current.focus();
//     };

//     const handleKeyDown = (e) => {
//       if (e.key.toLowerCase() === "s") {
//         saveCurrentInputs();
//         // No incrementamos el índice aquí, ya que se incrementa en saveCurrentInputs()
//       } else if (e.key.toLowerCase() === "w") {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + premios.length) % premios.length);
//         resetInputs();
//       } else if (e.key.toLowerCase() === "q") {
//         // Nueva funcionalidad: Borrar todos los datos del localStorage
//         localStorage.removeItem("premiosSorteados");
//         console.log("Todos los premios sorteados han sido eliminados");
//         resetInputs();
//       } else if (e.key.toLowerCase() === "e") {
//         // Nueva funcionalidad: Avanzar al siguiente premio sin guardar
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % premios.length);
//         resetInputs();
//       }
//     };

//     const saveCurrentInputs = () => {
//       const numero = numRefs.map(ref => ref.current?.value || "").join("");
//       const serie = serieRefs.map(ref => ref.current?.value || "").join("");
      
//       if (numero.length === 4 && serie.length === 3) {
//         let storedData = JSON.parse(localStorage.getItem("premiosSorteados")) || {};
//         // Usar el título del premio como clave en lugar del índice
//         storedData[premios[currentIndex].titulo] = { numero, serie };
//         localStorage.setItem("premiosSorteados", JSON.stringify(storedData));
        
//         // Incrementar el índice solo una vez aquí
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % premios.length);
//         resetInputs();
//       }
//     };

//     resetInputs();
//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [currentIndex]);

//   const handleInput = (e, index, refs, nextRefs, maxLen = 1) => {
//     e.target.value = e.target.value.replace(/\D/g, ""); // Permite solo números

//     if (e.target.value.length >= maxLen) {
//       if (index < refs.length - 1) {
//         refs[index + 1].current.focus();
//       } else if (nextRefs) {
//         nextRefs[0].current.focus();
//       }
//     }
//   };

//   const handleKeyDown = (e, index, refs, prevRefs) => {
//     if (e.key.toLowerCase() === "a") {
//       if (index > 0) {
//         refs[index - 1].current.focus();
//       } else if (prevRefs) {
//         prevRefs[prevRefs.length - 1].current.focus();
//       }
//     } else if (e.key.toLowerCase() === "d") {
//       if (index < refs.length - 1) {
//         refs[index + 1].current.focus();
//       } else if (prevRefs) {
//         prevRefs[0].current.focus();
//       }
//     }
//   };

//   return (
//     <div>
//       {/* Incluir el componente SorteoInfo debajo del NavBar */}
//       <SorteoInfo />
      
//       <div className="mt-4 text-center">
//         <p className="text-5xl font-bold text-center">
//           PREMIO {premios[currentIndex].titulo} POR {premios[currentIndex].valor}
//         </p>
//         <div className="grid grid-cols-2 mt-4 text-lg pl-40">
//           <div className="text-center text-4xl font-bold">NÚMERO</div>
//           <div className="text-center text-4xl font-bold">SERIE</div>
//         </div>
//         <div className="grid grid-cols-2 gap-4 mt-4 pl-40">
//           <div className="flex justify-center gap-3">
//             {numRefs.map((ref, i) => (
//               <input
//                 key={i}
//                 ref={ref}
//                 type="text"
//                 className="w-40 h-40 text-center border-8 border-[#e9be6c] rounded-full bg-white text-[#1a428a] text-7xl font-bold caret-transparent"
//                 maxLength="1"
//                 onInput={(e) => handleInput(e, i, numRefs, serieRefs)}
//                 onKeyDown={(e) => handleKeyDown(e, i, numRefs, serieRefs)}
//               />
//             ))}
//           </div>

//           <div className="flex justify-center gap-3">
//             {serieRefs.map((ref, i) => (
//               <input
//                 key={i}
//                 ref={ref}
//                 type="text"
//                 className="w-40 h-40 text-center border-8 border-[#e9be6c] rounded-full bg-white text-[#1a428a] text-7xl font-bold caret-transparent"
//                 maxLength={i === 0 ? "2" : "1"}
//                 onInput={(e) => handleInput(e, i, serieRefs, null, i === 0 ? 2 : 1)}
//                 onKeyDown={(e) => handleKeyDown(e, i, serieRefs, numRefs)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PremioActual;
