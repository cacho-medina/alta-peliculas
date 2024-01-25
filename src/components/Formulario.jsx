import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Lista from "./Lista";
import film from "../assets/film.svg";

function Formulario() {
    const initialValues = {
        nombre: "",
        desc: "",
        genero: "",
    };
    const peliculasInitial =
        JSON.parse(localStorage.getItem("peliculas")) || [];
    const [info, setInfo] = useState(initialValues);
    const [peliculas, setPeliculas] = useState(peliculasInitial);
    const [errors, setErrors] = useState(initialValues);
    const validar = (info) => {
        const e = {};
        if (!info.nombre) {
            e.nombre = "introduzca un nombre";
        }
        if (info.nombre.length < 3 || info.nombre.length > 60) {
            e.nombre = "introduzca un nombre valido";
        }
        if (!info.desc) {
            e.desc = "introduzca una descripcion de la pelicula";
        }
        if (!info.genero) {
            e.genero = "seleccione el genero al que pertenece";
        }
        return e;
    };
    const handleInputChange = (e) => {
        setErrors(validar({ ...info, [e.target.name]: e.target.value }));
        setInfo({ ...info, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            setPeliculas([...peliculas, info]);
            setInfo(initialValues);
            alert("Pelicula cargada!");
        } else {
            alert("Por favor complete los datos!");
        }
    };
    const deletePelicula = (nombre) => {
        const filtered = peliculas.filter((item) => item.nombre !== nombre);
        setPeliculas(filtered);
    };
    useEffect(() => {
        localStorage.setItem("peliculas", JSON.stringify(peliculas));
    }, [peliculas]);
    return (
        <>
            <Form
                className="d-flex flex-column gap-2 px-2 py-4"
                onSubmit={handleSubmit}
            >
                <div className="text-center">
                    <img src={film} alt="logo de pelicula" />
                    <h1 className="mb-3">Alta de peliculas</h1>
                </div>
                <div className="text-sm-center inputMax mx-md-auto">
                    <Form.Label htmlFor="nombre">Nombre:</Form.Label>
                    <Form.Control
                        type="text"
                        id="nombre"
                        name="nombre"
                        className={`${errors.nombre ? "errorInput" : ""}`}
                        onChange={handleInputChange}
                        value={info.nombre}
                    />
                    {errors.nombre && <p className="error">{errors.nombre}</p>}
                </div>
                <div className="text-sm-center inputMax mx-md-auto">
                    <Form.Label htmlFor="desc">Descripcion:</Form.Label>
                    <textarea
                        name="desc"
                        id="desc"
                        className={`form-control ${
                            errors.desc ? "errorInput" : ""
                        }`}
                        onChange={handleInputChange}
                        value={info.desc}
                    ></textarea>
                    {errors.desc && <p className="error">{errors.desc}</p>}
                </div>
                <div className="text-sm-center inputMax mx-md-auto">
                    <Form.Label htmlFor="genero">Genero:</Form.Label>
                    <Form.Select
                        id="genero"
                        name="genero"
                        onChange={handleInputChange}
                        value={info.genero}
                        className={`${errors.genero ? "errorInput" : ""}`}
                    >
                        <option value="">seleccione genero</option>
                        <option value="comedia">comedia</option>
                        <option value="drama">drama</option>
                        <option value="infantil">infantil</option>
                    </Form.Select>
                    {errors.genero && <p className="error">{errors.genero}</p>}
                </div>
                <Button
                    className="mt-4 align-self-center px-4"
                    variant="outline-light"
                    type="submit"
                    disabled={!info.nombre}
                >
                    Agregar
                </Button>
            </Form>
            <Container fluid className="px-1 py-3 bg-dark">
                <h2 className="text-center py-3 py-md-5">
                    Peliculas Guardadas
                </h2>
                <Lista
                    peliculas={peliculas}
                    deletePelicula={deletePelicula}
                ></Lista>
            </Container>
        </>
    );
}

export default Formulario;
