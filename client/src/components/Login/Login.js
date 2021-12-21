import React, {useRef, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Card, Form, Button, Container, Alert} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate  } from 'react-router-dom'; 

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value.length < 6){
            return setError('La contraseña debe tener al menos 6 caracteres')
        }

        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/admin/products')
        }catch (error){
            console.log(error);
            setError('Error al ingresar');
        }
        setLoading(false)   
    }
    return (
        <Container className="d-flex align-items-center justify-content-center" >
            <div className="w-100" style={{ maxWidth: '400px'}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Login</h2> 
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
                            <Button disabled={loading} type="submit" className="w-100">Login</Button>
                        </Form>
                    </Card.Body>
                </Card>  
                <div className="w-100 text-center mt-2">
                   <Link to="/signup">Registrarse</Link>
                </div>
          </div>
        </Container>
    )
}


