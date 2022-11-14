import ".././exe.css"
import React, { useState } from "react"
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"


import { Button, Col, Container, Row } from "react-bootstrap"
import Header from "../../../components/Header"

const Ex1 = () => {

  const [opc1, setOpc1] = useState("")
  const [opc2, setOpc2] = useState("")
  const [opc3, setOpc3] = useState("")
  const [opc4, setOpc4] = useState("")


  const submit = (e) => {
    e.preventDefault()
    if (opc1.toLowerCase() == "a" & opc2.toLowerCase() == "a" & opc3.toLowerCase() == "o"
      & opc4.toLowerCase() == "o") alert("acertou")
    else {
      alert("errou")
    }
  }

  return (
    <>

      <Header />

      <main>

        <Container>
          <div className="next">
            <div >
              <p>
                <strong>A – B – C – D – E – F – G – H – I –
                  J – K – L –M – N – O – P – Q – R – S – T – U – V – W – X – Y –Z</strong>
              </p>
            </div>
          </div>
          <div className="questao ">
            <div>
              <h3>Questao 1</h3>
            </div>
            <hr></hr>
            <div className="img-exe">

              <img src="img/exercicios/abc.png" height={"120px"}></img>
            </div>
            <hr></hr>
            <div className='audio'>
              <h3> OBJETIVO</h3>
              <audio src="assets/audio/objetivo.mpeg" controls></audio>
            </div>
            <form className="form" onSubmit={submit}>



              <div>
                <Row>
                  <Col>
                    <div className="img-exe">
                      <img src="img/exercicios/abelha.png" height={"100px"}></img>
                    </div>
                    <InputGroup className="mb-3">
                      <Form.Control
                        onChange={(e) => setOpc1(e.target.value)}
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                    <div className="img-exe">
                      <img src="img/exercicios/IGREJA.png" height={"100px"}></img>
                    </div>
                    <InputGroup className="mb-3">
                      <Form.Control
                        onChange={(e) => setOpc2(e.target.value)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="img-exe">
                      <img src="img/exercicios/ovo.png" height={"100px"}></img>
                    </div>

                    <InputGroup className="mb-3">
                      <Form.Control
                        onChange={(e) => setOpc3(e.target.value)}
                      />
                    </InputGroup>

                  </Col>
                  <Col>
                    <div className="img-exe">
                      <img src="img/exercicios/ESQUILO.png" height={"100px"}></img>
                    </div>

                    <InputGroup className="mb-3">
                      <Form.Control
                        onChange={(e) => setOpc4(e.target.value)}
                      />
                    </InputGroup>

                  </Col>

                </Row>


              </div>
              <div >
                <Row className="justify-content-md-center">
                  <Col xs lg="4">
                    <Button type="submit" className="btn-register">Verificar</Button>
                  </Col>
                </Row>
              </div>
            </form>
          </div>
          <div className="next">

            <Row >
              <Col >
                <h1 >Próximo exercico</h1>
                <p>Mudanças de sons e silabas</p>
              </Col>
              <div>

                <Button><Link className="next-link" to={"/ex2"} >
                  Avançar
                </Link></Button>
              </div>

            </Row>
          </div>
        </Container>

      </main>

    </>

  )
}

export default Ex1