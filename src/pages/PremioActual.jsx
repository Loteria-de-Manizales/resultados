function PremioActual() {
    return (
      <div className="mt-4 text-center">
        <p className="text-xl">PREMIO _______ POR ________ MILLONES DE PESOS</p>
        <div className="grid grid-cols-2 mt-4 text-lg">
          <div className="text-center">NÚMERO</div>
          <div className="text-center">SERIE</div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex justify-center gap-2">
            {[...Array(4)].map((_, i) => (
              <input key={i} className="w-40 h-40 text-center border rounded-full" maxLength="1" />
            ))}
          </div>
          <div className="flex justify-center gap-2">
            <input className="w-40 h-40 text-center border rounded-full" maxLength="2" />
            <input className="w-40 h-40 text-center border rounded-full" maxLength="1" />
          </div>
        </div>
      </div>
    );
  }
  export default PremioActual;