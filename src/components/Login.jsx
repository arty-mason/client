import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    onIdSubmit(idRef.current.value);
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="me-2">
          Login
        </Button>
        <Button variant="secondary">Create A New Id</Button>
      </Form>
    </Container>
  );
};

export default Login;