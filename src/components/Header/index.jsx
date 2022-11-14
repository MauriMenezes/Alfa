import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillPencilFill, BsBookHalf, BsFilePerson, BsPlayCircle } from 'react-icons/bs';
import { AiFillPlayCircle } from 'react-icons/ai';




import { Link } from "react-router-dom"
const Header = () => {

  return (

    <>
      <header>
        <Container fluid>
          <Row>
            <Col>
              <img src="img/logo.png" width="80px" ></img>
            </Col>
            <Col>
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Link className="link" to={"/"} >

                    Sair
                  </Link>

                </Nav.Item>
              </Nav>
            </Col>
            <Navbar >
              <Container>
                <Nav className="me-auto">
                  <Nav.Link href="#home">
                    <div className='text-center'>
                      <BsPlayCircle />
                    </div>
                    <Link className="link" to={"/aula1"} >
                      Video Aula
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <div className='text-center'>
                      <BsFillPencilFill />
                    </div>
                    <Link className="link" to={"/ex1"} >
                      Exercícios
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#features">
                    <div className='text-center'>
                      <BsBookHalf />
                    </div>
                    <Link className="link" to={"/biblioteca"} >
                      Biblioteca Fácil
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#pricing">
                    <div className='text-center'>
                      <BsFilePerson />
                    </div>
                    Perfil
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Row>
        </Container>
      </header>
    </>

  )
}

export default Header;