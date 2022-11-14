import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Aprender from "../../components/aprender"
import Cards from "../../components/Cards"
import Header from "../../components/Header"
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
              <Col>
                <Cards
                  video={<iframe width="100%" height="225" class="video-p" src="https://www.youtube.com/embed/hRtd_2LtM14"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
                  titulo="Aula 01"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
              <Col>
                <Cards
                  video={<iframe width="100%" height="225" class="video-p" src="https://www.youtube.com/embed/_N3Ny10OHQQ"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
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
              <Col >
                <h1 >Próxima Aula</h1>
                <p>Mudanças de sons</p>
              </Col>
              <div>

                <Link className="next-link" to={"/aula2"} >
                  < Button >
                    Video Aula
                  </Button>
                </Link>
              </div>

            </Row>
          </div>




        </Container>
      </main >
    </>
  )

}

export default VideoAula1