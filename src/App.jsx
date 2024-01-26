import "./App.css";
import Formulario from "./components/Formulario";
import Container from "react-bootstrap/Container";

function App() {
    return (
        <Container fluid className="bg-secondary text-light p-0">
            <Formulario />
        </Container>
    );
}

export default App;
