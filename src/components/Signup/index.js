import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./signup.scss";

const Signup = () => {
  return (
    <div className="sign-up-form">
      <Form>
        <div className="status-checkbox">
          <Form.Check
            inline
            label="I'm a Recruiter"
            name="status"
            type="radio"
            id="status-recruiter"
          />

          <Form.Check
            inline
            label="I'm looking for Job"
            name="status"
            type="radio"
            id="status-candidate"
          />
        </div>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Type your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAdhaar">
          <Form.Label>Adhaar Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your Adhaar number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPan">
          <Form.Label>PAN</Form.Label>
          <Form.Control type="text" placeholder="Enter your PAN" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;