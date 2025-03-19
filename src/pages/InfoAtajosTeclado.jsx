function InfoAtajosTeclado() {

    return (
        <>
            <div className="mt-8 text-lg" >
                <p><strong>Atajos de teclado:</strong></p>
                <p><kbd>S</kbd> - Guardar número y serie actual y avanzar al siguiente premio</p>
                <p><kbd>W</kbd> - Retroceder al premio anterior</p>
                <p><kbd>E</kbd> - Avanzar al siguiente premio sin guardar datos</p>
                <p><kbd>Q</kbd> - Borrar todos los premios sorteados</p>
                <p><kbd>A/D</kbd> - Moverse entre los campos de entrada</p>
            </div>
        </>

    )
}

export default InfoAtajosTeclado;

