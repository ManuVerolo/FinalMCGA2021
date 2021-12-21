import React, {useRef, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Card, Form, Button, Container, Alert} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Las contraseñas no coinciden')
        }

        if(passwordRef.current.value.length < 6){
            return setError('La contraseña debe tener al menos 6 caracteres')
        }

        try{
            setError("")
            setLoading(true)
           await signup(emailRef.current.value, passwordRef.current.value)
        }catch (error){
            console.log(error);
            setError('Error al registrarse');
        }
        setLoading(false)   
    }
    return (
        <Container className="d-flex align-items-center justify-content-center" >
            <div className="w-100" style={{ maxWidth: '400px'}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2> 
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit} >
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="mb-3" type="email" placeholder="Ingrese el email" required ref={emailRef}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control className="mb-3" type="password" placeholder="Ingrese la contraseña" required ref={passwordRef}/>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <Form.Control className="mb-3" type="password" placeholder="Confirmacion de contraseña" required ref={passwordConfirmRef}/>
                            </Form.Group>
                            <Button disabled={loading} type="submit" className="w-100">Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>  
                <div className="w-100 text-center mt-2">
                    Ya tienes cuenta?
                </div>
          </div>
        </Container>
    )
}


