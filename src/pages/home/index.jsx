import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Cards from '../../components/Cards';
import { AiFillPlayCircle } from 'react-icons/ai';
import { BsFillPencilFill, BsBook } from 'react-icons/bs';
import './home.css'
import Header from '../../components/Header';
import Footer from '../../components/footer';


const Home = () => {
  return (
    <>
      <header id='header-index'>
        <Container fluid>
          <Row>
            <Col>
              <img src="img/logo.png" width="80px" ></img>
            </Col>
            <Col>
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Link className="link" to={"/login"} >

                    Entrar
                  </Link>

                </Nav.Item>
                <Nav.Item>
                  <Link className="link" to={"/register"} >

                    Cadastrar
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </header>
      {/* m */}
      <main>

        <Container>

          <Row>
            <div className="my-2 video text-center embed-responsive embed-responsive-16by9 video-p">
              <iframe width="100%" height="415" className="video-p" src="https://www.youtube.com/embed/hYfgGsbcbho"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </Row>
          <div className='audio'>
            <h3> RESUMO INFORMATIVO SOBRE O PROJETO</h3>
            <audio src="/audio/Resumo-informativo.mpeg" controls></audio>
          </div>
          <Row>
            <hr></hr>
            <Col>
              <p>
                A plataforma tem como objetivo oferecer educação para jovens e adultos que moram em áreas rurais e estão atrasados ​​em sua formação.
              </p>
              <p>
                Proporciona aos participantes a oportunidade de compreender as estratégias metodológicas da educação de jovens e adultos, de forma a introduzi-los na prática pedagógica da escola.
              </p>
              <p>
                Promovendo o tema da erradicação do analfabetismo de jovens e adultos nas áreas rurais de nosso país, tendo em vista a necessidade de refletir sobre o conceito de alfabetização e garantir o acesso e a continuidade de jovens e adultos nesse processo de alfabetização. Indique um amigo ou parente para dar os primeiros passos .
              </p>
            </Col>
            <Col md={6}>
              <img className='img-home mb-3' src="img/pag-inicial/children-306607_1280.jpg" width="100%" ></img>
            </Col>
            <hr></hr>

          </Row>
          <Row>
            <div className='audio'>
              <h3> Objetivo</h3>
              <audio src="/audio/objetivo.mpeg" controls></audio>

            </div>
            <div>
              Promover a superação do analfabetismo entre jovens com 15 anos ou mais, adultos e idosos e contribuir para a universalização do ensino fundamental no Brasil focado principalmente nas Áreas rurais. Sua concepção reconhece a educação como direito humano e a oferta pública da alfabetização como porta de entrada para a educação e a escolarização das pessoas ao longo de toda a vida.
            </div>
          </Row>
          <hr></hr>
          <Row>
            <div className='audio mb-3'>
              <h3> Percurso</h3>

            </div>


          </Row>

          <Row className='mt-3'>
            <Cards
              titulo={<AiFillPlayCircle />}
              texto={"VIDEO "}
              audio={<audio src="assets/audio/objetivo.mpeg" controls></audio>}
              info={"Na página de vídeo aulas, você deverá apertar o play no vídeo do vovô Manu que irá falar sobre leitura e formação de palavras e vai ensinar para vocês um jeito divertido de aprender português e matemática! Aproveite para acessar o canal dele no YouTube com auxilio de alguém e se inscrever no canal para que ele saiba que está ajudando e que você tenha acesso a mais aulas. Não se limite."}
            />
            <Cards
              titulo={<BsFillPencilFill />}
              texto={"Exercicios"}
              audio={<audio src="assets/audio/objetivo.mpeg" controls></audio>}

              info={"Após assistir as vídeo aulas, você poderá testar seu conhecimento na pagina de exercícios que é a imagem de um lápis. Você deve ler o conteúdo e ir marcando as respostas corretas. No fim da página poderá ver as respostas para comparar se estão certas as suas respostas. Caso não tenha acertado tudo, não tem problema! você está aprendendo e é errando que se aprende. Só não vale desistir."}
            />
            <Cards
              titulo={<BsBook />}
              texto={"Biblioteca fácil"}
              audio={<audio src="assets/audio/objetivo.mpeg" controls></audio>}

              info={"Após assistir as vídeo aulas, você poderá testar seu conhecimento na pagina de exercícios que é a imagem de um lápis. Você deve ler o conteúdo e ir marcando as respostas corretas. No fim da página poderá ver as respostas para comparar se estão certas as suas respostas. Caso não tenha acertado tudo, não tem problema! você está aprendendo e é errando que se aprende. Só não vale desistir."}
            />

          </Row>

        </Container>
        <Footer />
      </main>
    </>
  )
}
export default Home;