import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import backgroundImage from './components/regist.jpg';

function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        navigate('/login');

    };
    
    return (
        <Container 
            className="d-flex justify-content-center align-items-center" 
            style={{ 
                height: '100vh', 
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <Card style={{ width: '25rem', opacity: 0.95 }}>
                <Card.Body>
                    <Card.Title className="text-center">Register</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button 
                            variant="primary" 
                            type="submit" 
                            className="w-100 custom-button" 
                            style={{ backgroundColor: '#ff69b4', borderColor: '#ff69b4' }} 
                        >
                            Register
                        </Button>
                    </Form>
                    <p className="mt-3 text-center">
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Registration;