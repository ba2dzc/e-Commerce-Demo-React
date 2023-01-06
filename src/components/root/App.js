import { Container } from "reactstrap";
import Navi from '../navi/Navi'
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container fluid className="g-0">
      <Navi/>
      <Dashboard/>
    </Container>
  );
}

export default App;
