import "./aprender.css"
import { Col, Container, Row } from "react-bootstrap"


const Aprender = ({ texto }) => {


  return (
    <>
      <Container fluid>
        <Row className="align-items-center">
          <Col md={5}>
            <div>
              <img src="img/tempo-de-aprender.png" className="img-aprender" />
            </div>
          </Col>
          <Col>
            <h1>{texto}</h1>

          </Col>


        </Row>
      </Container>
    </>
  )

}

export default Aprender