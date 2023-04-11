import Modal from 'react-modal';
import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';

const Testing = () => {
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

function request(){
  fetch("http://localhost:5000/product?type=sticker", {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
  })
}
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>

    <Modal isOpen={show}>
      <div>
        <Button onClick = {request}>
          test me
        </Button>
      </div>
    </Modal>
    </>
  );
}

export default Testing
