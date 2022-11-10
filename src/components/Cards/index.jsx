import Card from 'react-bootstrap/Card';
import "./cards.css"
import Col from 'react-bootstrap/Col';
import { MdVerifiedUser } from 'react-icons/md';
import { IoMdPlayCircle } from 'react-icons/io';




const Cards = ({ width, img, titulo, texto, info, preco, quarto, btn, audio }) => {

  return (

    <Col className="box-cards">
      <Card style={{ width: width }} className="card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
            {texto}
          </Card.Text>
          <Card.Text>
            {audio}
          </Card.Text>
          <Card.Text>
            {info}
          </Card.Text>
          <Card.Text>
            {preco}
          </Card.Text>
          <Card.Text>
            {quarto}
          </Card.Text>
          {btn}
        </Card.Body>
      </Card>
    </Col>


  )


}
export default Cards;