import React from 'react'
// import de modulo de bootstrap
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../pages/LoginPAge.css'


//imports para el la creacion de usuario
import appFirebase from '../Credenciales'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(appFirebase)

// import { useState } from 'react';
// //import de modulos de firebase
// import appfirebase from '../Credenciales'
// //mudlo para detectar estado de login y registro
// import {getAuth, onAuthStateChange} from 'firebase/auth'
// //se verifican las credenciles
// const auth = getAuth(appfirebase)
// //creamos las variables para usuario y la declaramos vacia
// const [usuario, setUsuario] = useState(null)
// //creamos una funcion que va recibir estos datos
// onAuthStateChange(auth, (usuarioFirebase)=>{
//   if (usuarioFirebase) {
//     //va a guardar el usuario de firebase en la varibale set usuario
//     setUsuario(usuarioFirebase)
//   }
//   else{
//     setUsuario(null)
//   }
// })


const LoginPAge = () => {

  const navigate = useNavigate(); // Llamamos useNavigate aquí

  const Autenticacion = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario existente:", userCredential.user);

      // Llamamos directamente a navigate para redirigir
      navigate("/inicio");
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
  <Card.Title className='text-center mb-4'>Ingresar con:</Card.Title>

  <Form className='align-items-center' onSubmit={Autenticacion}>
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
  <Button id="" className="w-100" onClick={Autenticacion}>Inicia Sesion</Button>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="1"></Form.Label> {/* Espacio para alinear */}
  <Col sm="10">
    <Button id="colorboton" className="w-100">Inicia sesión con Google</Button>
  </Col>
</Form.Group>



    </Form>



</Card.Body>
</Card>

    </Container>


    </div>
)}

export default LoginPAge