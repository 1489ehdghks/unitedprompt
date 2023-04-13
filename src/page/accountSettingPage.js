import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AccountSettingPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
      };
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </Form>
  );
}

export default AccountSettingPage;