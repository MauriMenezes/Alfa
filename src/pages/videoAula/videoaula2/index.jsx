import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Aprender from "../../../components/aprender"
import Cards from "../../../components/Cards"
import Header from "../../../components/Header"

const VideoAula2 = () => {

  return (

    <>
      <Header />
      <main>
        <Aprender
          texto={"Mudança de sons e sílabas"} />


        <section>

          <Container>
            <Row>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225"
                    src="https://www.youtube.com/embed/5EAp7NWSmfc"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
                  titulo="Aula 03"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225"
                    src="https://www.youtube.com/embed/XI_Pxm7BK78"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
                  titulo="Aula 04"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225"
                    src="https://www.youtube.com/embed/F3_B7zTNa5Y"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
                  titulo="Aula 05"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
              <Col md={6}>
                <Cards
                  video={<iframe width="100%" height="225"
                    src="https://www.youtube.com/embed/BxgT_2Je66o"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>}
                  titulo="Aula 06"
                  texto={"O vovô Manu está na área e vai ensinar para vocês um jeito divertido de aprender português e matemática!"}
                />
              </Col>
            </Row>

          </Container>

        </section>

        <Container>
          <Link className="" to={"/ex2"} >
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

                <Button><Link className="next-link" to={"/aula3"} >
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
export default VideoAula2