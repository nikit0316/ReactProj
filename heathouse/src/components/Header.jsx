import React, {useState} from "react";
import image from "../icons/Rectangle4.png";
import pdf1 from "../icons/about.pdf";
import pdf2 from "../icons/contacts.pdf";
import pdf3 from "../icons/documents.pdf";
import { Modal, Button, InputGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [organisation, setOrganistaion] = useState('');

const handleChangeOrganisation = (event) => {
  setOrganistaion(event.target.value);
}
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleChangeText = (event) => {
    setText(event.target.value)
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sendEmail = () => {
    console.log('Sup')
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "treskov-1@mail.ru",
      Password : "52D591428F30B65875CAC6A30A76E36DFD6D",
      To : 'treskov-1@mail.ru',
      From : "misterreskov@gmail.com",
      Subject : organisation,
      Body : "Email фирмы: " + email + " Запрос по обратной связи: " + text
  }).then(
    message => alert(message)
    .then(
      handleClose
    )
  );
}
  return (
    <div className="flex justify-around ml-8 my-8">
      <div className="w-1/6">
        <img className="w-40 h-auto" src={image} alt="Oops" />
      </div>
      <div className="w-3/4">
        <div className="flex flex-row ml-40 justify-around">
          <div className="flex-wrap w-2/5 mr-40">
            <div className="text-red-900 text-xl">
              Россия, г. Казань
            </div>
            <div  className="text-red-900 text-xl">
            ул. Проспект Победы, д. 159, оф. 508
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-red-900 font-bold">tgm-kazan@mail.ru</h2>
            <h2 className="text-red-900 font-bold">+7(965)-675-15-36</h2>
          </div>
        </div>
        <div className="mr-28">
          <div className="bg-red-900 h-0.5 m-3 mt-10"></div>
          <div className="flex justify-between">
          <a className ="text-red-900 text-xl font-bold" href={pdf1} target = "_blank" rel="noreferrer">О компании </a>
            <button> <text className="text-red-900 text-xl font-bold">Главная</text> </button>
            <a className ="text-red-900 text-xl font-bold" href={pdf2} target = "_blank" rel="noreferrer">Контакты </a>
            <button onClick={handleShow}> <text className="text-red-900 text-xl font-bold">Обратная связь</text> </button>
            <a className ="text-red-900 text-xl font-bold" href={pdf3} target = "_blank" rel="noreferrer">Разрешительные документы</a>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Обратная связь</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
          <Form.Control aria-label="email"
          aria-describedby="inputGroup-sizing-default" onChange={handleChangeEmail} value={email}>
          </Form.Control>
          </InputGroup>
          <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-default">Текст</InputGroup.Text>
          <Form.Control aria-label="email"
          aria-describedby="inputGroup-sizing-default" onChange={handleChangeText} value={text}>
          </Form.Control>
          </InputGroup>
          <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-default">Организация</InputGroup.Text>
          <Form.Control aria-label="email"
          aria-describedby="inputGroup-sizing-default" onChange={handleChangeOrganisation} value={organisation}>
          </Form.Control>
          </InputGroup>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendEmail}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
