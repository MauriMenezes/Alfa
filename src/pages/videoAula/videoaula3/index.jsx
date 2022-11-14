
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Aprender from "../../../components/aprender"
import Cards from "../../../components/Cards"
import Header from "../../../components/Header"



const VideoAula3 = () => {

  return (

    <>
      <Header />
      <main>
        <Aprender
          texto={"O uso das letras C e Ç"} />


        <section>

          <Container>
            <Row>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225"
                    src="https://www.youtube.com/embed/8g8sR02RRc4"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
                  titulo="Aula 07"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225"
                    src="https://www.youtube.com/embed/OOYcQMeJkLc"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
                  titulo="Aula 08"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225"
                    src="https://www.youtube.com/embed/4RTklY9Hfpw"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
                  titulo="Aula 09"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225"
                    src="https://www.youtube.com/embed/hgDwgUHs68U"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
                  titulo="Aula 10"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225"
                    src="https://www.youtube.com/embed/boFY6mEiZ-o"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
                  titulo="Aula 11"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225"
                    src="https://www.youtube.com/embed/0GxWe0CMNoY"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
                  titulo="Aula 12"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
            </Row>

          </Container>

        </section>

        <Container>
          <Link className="" to={"/ex3"} >
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

                <Button><Link className="next-link" to={"/aula4"} >
                  Video Aula
                </Link></Button>
              </div>

            </Row>
          </div>

        </Container>
      </main>
    </>
  )



}
export default VideoAula3