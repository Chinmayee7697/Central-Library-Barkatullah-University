import axios from "axios";
import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate instead of useHistory
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        login();
        setError(null);
        navigate('/'); // Redirect to home page
      })
      .catch((error) => {
        setError("Login failed. Please try again.");
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="form-group">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="form-group">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <div className="button">
        <Button variant="primary" type="submit">
          Login
        </Button>
        </div>
      </Form>

      {/* Display error message */}
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
}
