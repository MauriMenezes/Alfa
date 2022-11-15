import { Button, Col, Container, Row } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"

const LinkPages = () => {

  return (

    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/ex1">
            <Button>Formação de palavras</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="/ex2">
            <Button>Mudança dos sons e sílabas </Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href="/ex3">
            <Button>Uso do C e Ç</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>






    </>
  )
}
export default LinkPages