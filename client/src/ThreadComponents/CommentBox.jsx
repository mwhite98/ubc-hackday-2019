import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CommentForm extends Component {

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default CommentForm;
