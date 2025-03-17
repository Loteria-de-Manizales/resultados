import { useRef } from "react";

function PremioActual() {
  const numRefs = [useRef(), useRef(), useRef(), useRef()];
  const serieRefs = [useRef(), useRef()];

  const handleInput = (e, index, refs, nextRefs, maxLen = 1) => {
    e.target.value = e.target.value.replace(/\D/g, ""); // Permite solo números

    // Si se alcanza la longitud máxima, mover el foco
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
      // Si presiona "A" y hay un input anterior, moverse atrás
      if (index > 0) {
        refs[index - 1].current.focus();
      } else if (prevRefs) {
        prevRefs[prevRefs.length - 1].current.focus();
      }
    } else if (e.key.toLowerCase() === "d") {
      // Si presiona "D" y hay un input siguiente, moverse adelante
      if (index < refs.length - 1) {
        refs[index + 1].current.focus();
      } else if (prevRefs) {
        prevRefs[0].current.focus();
      }
    }
  };

  return (
    <div className="mt-4 text-center">
      <p className="text-xl">PREMIO _______ POR __________ </p>
      <div className="grid grid-cols-2 mt-4 text-lg">
        <div className="text-center">NÚMERO</div>
        <div className="text-center">SERIE</div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Inputs para el número */}
        <div className="flex justify-center gap-3">
          {numRefs.map((ref, i) => (
            <input
              key={i}
              ref={ref}
              type="text"
              className="w-40 h-40 text-center border-4 border-[#1a428a] rounded-full bg-white text-[#1a428a] text-7xl font-bold"
              maxLength="1"
              onInput={(e) => handleInput(e, i, numRefs, serieRefs)}
              onKeyDown={(e) => handleKeyDown(e, i, numRefs, serieRefs)}
            />
          ))}
        </div>

        {/* Inputs para la serie */}
        <div className="flex justify-center gap-3">
          {serieRefs.map((ref, i) => (
            <input
              key={i}
              ref={ref}
              type="text"
              className="w-40 h-40 text-center border-4 border-[#1a428a] rounded-full bg-white text-[#1a428a] text-7xl font-bold"
              maxLength={i === 0 ? "2" : "1"}
              onInput={(e) => handleInput(e, i, serieRefs, null, i === 0 ? 2 : 1)}
              onKeyDown={(e) => handleKeyDown(e, i, serieRefs, numRefs)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PremioActual;

