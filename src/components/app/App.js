 

import {
    Row,
    Container ,
    Col
} from 'react-bootstrap';

import Appside from '../sidebar/Appside.jsx';
import './../sidebar/Appside.css';
import Rightside from '../sidebar/Rightside.jsx';
import './../sidebar/Rightside.css';

 
function App() {

    return (
        <Container>
            <Row>
                <Col> <Appside /></Col>
                <Col><Rightside /></Col>
            </Row>
        </Container>
    );
}
export default App;