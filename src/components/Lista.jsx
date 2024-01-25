import Pelicula from "./Pelicula";

function Lista({ peliculas, deletePelicula }) {
    return (
        <div className="d-flex flex-column gap-3 px-sm-5 gap-sm-4 flex-md-row flex-wrap justify-content-center">
            {peliculas.length ? (
                peliculas.map((peli, index) => {
                    return (
                        <Pelicula
                            key={index}
                            pelicula={peli}
                            deletePelicula={deletePelicula}
                        />
                    );
                })
            ) : (
                <p className="error text-center">No hay peliculas guardadas</p>
            )}
        </div>
    );
}

export default Lista;
