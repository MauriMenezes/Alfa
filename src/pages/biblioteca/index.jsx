import Header from "../../components/Header";
import Modals from "../../components/Modal";
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Cards from "../../components/Cards";




const Biblioteca = () => {

  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            <Col>
              <Modals
                img="img/biblioteca/urso.jpg"
                titulo="Os viajantes e o urso" />
            </Col>
            <Col>
              <Modals
                img="img/biblioteca/calunia.jpg"
                titulo="Calúnia" />
            </Col> <Col>
              <Modals
                img="img/biblioteca/formiga.jpg"
                titulo="Formigas" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Modals
                img="img/biblioteca/CaoEosso.jpg"
                titulo="O cão e o osso" />
            </Col>
            <Col>
              <Modals
                img="img/biblioteca/estreladoMar.jpg"
                titulo="Estrela do mar" />
            </Col> <Col>
              <Modals
                img="img/biblioteca/LeaoeJavali.webp"
                titulo="Leao e Javali" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Modals
                img="img/biblioteca/râ.jpg"
                titulo="Rã" />
            </Col>
            <Col>
              <Modals
                img="img/biblioteca/raposa.webp"
                titulo="A raposa" />
            </Col> <Col>
              <Modals
                img="img/biblioteca/CigarraeFormiga.webp"
                titulo="A cigarra e a formiga" />
            </Col>
          </Row>




        </Container>

      </main>
    </>


  )

}
export default Biblioteca;