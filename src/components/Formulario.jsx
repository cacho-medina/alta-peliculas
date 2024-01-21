import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function Formulario() {
    const initialValues = {
        nombre: "",
        desc: "",
        genero: "",
    };
    const [info, setInfo] = useState(initialValues);
    const [peliculas, setPeliculas] = useState([]);
    const handleInputChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setPeliculas([...peliculas, info]);
        setInfo(initialValues);
        console.log("info", info);
    };
    console.log(peliculas);
    return (
        <Form
            className="d-flex flex-column justify-content-center align-items-center gap-2"
            onSubmit={handleSubmit}
        >
            <h1 className="mb-3">Alta de peliculas</h1>
            <Form.Label htmlFor="nombre">Nombre:</Form.Label>
            <Form.Control
                type="text"
                id="nombre"
                name="nombre"
                onChange={handleInputChange}
                value={info.nombre}
            />
            <Form.Label htmlFor="desc">Descripcion:</Form.Label>
            <textarea
                name="desc"
                id="desc"
                className="form-control"
                onChange={handleInputChange}
                value={info.desc}
            ></textarea>
            <Form.Label htmlFor="genero">Genero:</Form.Label>
            <Form.Select
                id="genero"
                name="genero"
                onChange={handleInputChange}
                value={info.genero}
            >
                <option value="">seleccione genero</option>
                <option value="comedia">comedia</option>
                <option value="drama">drama</option>
                <option value="infantil">infantil</option>
            </Form.Select>
            <Button variant="outline-light" type="submit">
                Agregar
            </Button>
        </Form>
    );
}

export default Formulario;
