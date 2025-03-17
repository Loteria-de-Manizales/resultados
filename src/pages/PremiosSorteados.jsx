function PremiosSorteados() {
    return (
      <div className="mt-4 text-center">
        <h1 className="text-xl">Premios Sorteados</h1>
        {[...Array(30)].map((_, i) => (
          <p key={i} className="text-lg">Sorteo {i + 1}</p>
        ))}
      </div>
    );
  }
  export default PremiosSorteados;