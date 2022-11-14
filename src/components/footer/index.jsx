import "./footer.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from "react-bootstrap";


const Footer = () => {

  return (
    <>
      <Navbar className="p-2 footer"  >
        <Container fluid >
          <Row>
            <a href="#">
              <img src="/img/Github-logo.png" width="30px" ></img>
            </a>

          </Row>
        </Container>
      </Navbar>



    </>

  )

}
export default Footer;