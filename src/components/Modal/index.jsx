import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cards from '../Cards';

const Modals = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

      <Cards onClick={handleShow}
        height="180px"
        width="16rem"
        img={props.img}
        titulo={props.titulo}
        btn={<Button variant="primary" onClick={handleShow}> Abrir</Button>}
      />

      {/* <button variant="primary" onClick={handleShow}>
        <img src={props.img} width="100%" />
      </button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitulo}</Modal.Title>
        </Modal.Header>
        <audio src={props.audio} controls></audio>
        <Modal.Body>{props.texto}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )

}
export default Modals