import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { loginAction } from './actions'

const Login = () => {
    const auth = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();
    const login = (username: string, password: string) => dispatch(loginAction(username, password));

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        login(username, password);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="loginUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"
                        value={username} onChange={(e: any) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="loginPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        value={password} onChange={(e: any) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                    <strong>{auth.loggingIn? 'loading...' : 'LOGIN'}</strong>
                </Button>
            </Form>
        </>
    )
}

export default Login;