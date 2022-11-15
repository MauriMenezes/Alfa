import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from "../../context/auth"
import React, { useState, useContext } from "react"
import { BsFillPencilFill, BsBookHalf, BsFilePerson, BsPlayCircle } from 'react-icons/bs';
import { AiFillPlayCircle } from 'react-icons/ai';




import { Link } from "react-router-dom"
const Header = () => {

  const { logout } = useContext(AuthContext)
  const handleLogout = () => {

    logout()
  }

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
                  <Button variant="danger" className="btn-logOut" onClick={handleLogout}>Sair  </Button>

                </Nav.Item>
              </Nav>
            </Col>

            <Container>
              <Navbar >
                <Container>
                  <Nav className="me-auto">
                    <Nav.Link href="aula1">
                      <div className='text-center'>
                        <BsPlayCircle />
                      </div>
                      <div>
                        Video Aula
                      </div>
                    </Nav.Link>
                    <Nav.Link href="ex1">
                      <div className='text-center'>
                        <BsFillPencilFill />
                      </div>
                      <div>
                        Exercicios
                      </div>
                    </Nav.Link>
                    <Nav.Link href="biblioteca">
                      <div className='text-center'>
                        <BsBookHalf />
                      </div>
                      <div>
                        Biblioteca
                      </div>
                    </Nav.Link>
                    <Nav.Link href="perfil">
                      <div className='text-center'>
                        <BsFilePerson />
                      </div>
                      <span>
                        Perfil
                      </span>
                    </Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </Container>

          </Row>
        </Container>
      </header>
    </>

  )
}

export default Header;