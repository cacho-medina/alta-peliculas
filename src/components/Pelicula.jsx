import Badge from "react-bootstrap/Badge";
import { BsTrashFill } from "react-icons/bs";

function Pelicula({ pelicula, deletePelicula }) {
    const badgeType = (genero) => {
        let tipo = "";
        if (genero == "comedia") {
            tipo = "warning";
        }
        if (genero == "drama") {
            tipo = "danger";
        }
        if (genero == "infantil") {
            tipo = "success";
        }
        return tipo;
    };
    return (
        <div className="border rounded d-flex flex-column align-items-center gap-3 py-2 px-1 py-sm-3 px-sm-3 gap-sm-4 max">
            <button
                className="btn btn-outline-light"
                onClick={() => {
                    deletePelicula(pelicula.nombre);
                }}
            >
                <BsTrashFill />
            </button>
            <h3 className="my-0">{pelicula.nombre}</h3>
            <Badge bg={`${badgeType(pelicula.genero)}`}>
                {pelicula.genero}
            </Badge>
            <p className="text-center overflow-auto maxCard">{pelicula.desc}</p>
        </div>
    );
}

export default Pelicula;
