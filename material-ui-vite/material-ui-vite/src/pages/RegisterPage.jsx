import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import '../pages/LoginPAge.css'

//imports para el la creacion de usuario
import appFirebase from '../Credenciales'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(appFirebase)


const RegisterPage = () => {

  const navigate = useNavigate(); // Llamamos useNavigate aquí

  const Autenticacion = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario registrado:", userCredential.user);
      navigate("/Perfil");
    } catch (error) {
      console.error("Error en la autenticación:", error.message);
    }
  };
  


  return (
    <div id="fondo"> 


<div>LoginPAge</div>
    <Container fluid="md" className="d-flex justify-content-center align-items-center align-middle"> 

    


<Card style={{ width: '20rem' }} id='fondo2' className='align-items-center'>
<Card.Img variant="top" src="https://i.ibb.co/jkdpp6Ff/arcanum-logo-libro-peuqe.png" id='imagen' />
<Card.Body>
  <Card.Title className='text-center mb-4'>Registrate con:</Card.Title>

  <Form className='align-items-center' >
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="1">
        </Form.Label>
        <Col sm="10">
        <Form.Control type="Text" placeholder="Email" id='email'/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="1">
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" id='password'/>
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3">
  <Form.Label column sm="1"></Form.Label> {/* Espacio para alinear */}
  <Col sm="10">
    <Button id="" className="w-100" onClick={Autenticacion}>Registrate</Button>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="1"></Form.Label> {/* Espacio para alinear */}
  <Col sm="10">
    <Button id="colorboton" className="w-100">Registrate con Google</Button>
  </Col>
</Form.Group>

    </Form>



</Card.Body>
</Card>

    </Container>


    </div>
  )
}

export default RegisterPage