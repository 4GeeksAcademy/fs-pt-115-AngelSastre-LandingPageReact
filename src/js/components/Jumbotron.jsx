export const Jumbotron = () => {
    return (
        <section
            className="col-12 d-flex align-items-start justify-content-center flex-column text-light mt-2"
            style={{
                backgroundImage: 'url(src/img/Jumbotron.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '40rem',
                position: 'relative'
            }}
        >
            
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1
                }}
            ></div>

            <hgroup className="position-relative p-3" style={{ zIndex: 2 }}>
                <h1 className="display-4 fw-bold mb-3">¡Alciku vs Angellin!</h1>
                <p className="lead mb-4">En el corazón del Torneo Mundial de las Artes Marciales, la historia se escribe con cada golpe. Alciku, el guerrero saiyajin impulsado por su furia indomable, se enfrenta a Angellin, el maestro terrenal de técnica perfecta y voluntad inquebrantable. El destino del combate no está escrito... solo uno saldrá en pie.

</p>
            </hgroup>
            <button className="ms-3 btn btn-outline-light btn-lg" style={{ zIndex: 2 }}>Torneo de poder</button>


        </section>
    );
}