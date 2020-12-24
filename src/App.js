import { Container, Row } from 'react-bootstrap';
import './App.css';
import AppNavbar from './components/appNavbar/AppNavbar'
import AppPage from './components/appPage/AppPage'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <div className="col-3">
            <AppNavbar/>
          </div>
          <div className="col-9">
            <AppPage/>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
