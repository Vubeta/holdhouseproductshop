import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                    <br />
                </Col>
                <Col>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                    <br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;