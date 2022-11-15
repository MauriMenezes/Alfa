import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Aprender from "../../components/aprender"
import Cards from "../../components/Cards"
import Footer from "../../components/footer"
import Header from "../../components/Header"
import LinkPages from "../../components/LinksExercicios"
import PagExe from "../../components/LinksExercicios"
import "./videoAula.css"


const VideoAula1 = () => {

  return (

    <>
      <Header />
      <main>
        <Aprender
          texto={"Leitura e Formação de palavras"} />


        <section>

          <Container>
            <Row>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225" className="video-p" src="https://www.youtube.com/embed/hRtd_2LtM14"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>}
                  titulo="Aula 01"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225" className="video-p" src="https://www.youtube.com/embed/_N3Ny10OHQQ"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>}
                  titulo="Aula 02"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
            </Row>

          </Container>

        </section>

        <Container>

          <Link className="" to={"/ex1"} >
            <Button>

              Exercicio
            </Button>
          </Link>



          <div className="next">
            <div >
              <p>
                <strong>A – B – C – D – E – F – G – H – I –
                  J – K – L –M – N – O – P – Q – R – S – T – U – V – W – X – Y –Z</strong>
              </p>
            </div>
            <Row >
              <div>
                <h1 >Próxima Aula</h1>
                <p>Mudanças de sons</p>
              </div>
              <div>

                <Link className="next-link" to={"/aula2"} >
                  < Button >
                    Avançar
                  </Button>
                </Link>
              </div>

            </Row>
          </div>




        </Container>
        <Footer />
      </main >
    </>
  )

}

export default VideoAula1