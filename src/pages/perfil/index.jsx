import { Button, Col, Container, Row } from "react-bootstrap"
import Cards from "../../components/Cards"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from "../../components/Header";
import Footer from "../../components/footer";

const Perfil = () => {

  return (
    <>

      <Header />
      <main>

        <Container>

          <Row>
            <Col md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/person-1824144_1280.png" />
                <Card.Body>
                  <Card.Title>Perfil</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Usuario : JUCA</ListGroup.Item>
                  <ListGroup.Item>Email :juca@gmail.com</ListGroup.Item>
                  <ListGroup.Item>telefone : 9999999</ListGroup.Item>
                </ListGroup>

              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Header as="h5">Dados Cadastrais</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>

                  </Card.Text>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Nome
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      placeholder="JUCA"
                      disabled
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      CPF
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      placeholder="123.456.789.11"
                      disabled
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Email
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      placeholder="juca@gmail.com"
                      disabled
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      telefone
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      placeholder="99999999"
                      disabled
                    />
                  </InputGroup>
                  <Button variant="primary">Atualizar</Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </main>
      <Footer />

    </>
  )


}
export default Perfil