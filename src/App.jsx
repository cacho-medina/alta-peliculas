import "./App.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
    return (
        <Container className="bg-secondary text-light py-4">
            <Formulario />
        </Container>
    );
}

export default App;
