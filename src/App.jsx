import "./App.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
    return (
        <Container fluid className="bg-secondary text-light p-0">
            <Formulario />
        </Container>
    );
}

export default App;
