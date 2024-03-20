import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="10" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPre">&</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Name"
              aria-describedby="inputGroupPre"
              required
              s
            />
            <Form.Control.Feedback type="invalid">
              Please enter name
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="10" controlId="validationCustom02">
          <Form.Label>Phone</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroup">#</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="phone"
              aria-describedby="inputGroup"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter phone
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="10" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter proper email
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
    
      <Form.Group className="mb-3 mt-4">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" className='mt-3'>Submit form</Button>
    </Form>
  );
}

export default FormExample;