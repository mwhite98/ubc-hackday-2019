import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import {
  MentorTitle,
} from './Styles';

class CommentForm extends Component {

  render() {
    return (
      <Card>
        <Form style={{ width: '90%', margin: 'auto' }}>
          <MentorTitle>
            Join the Conversation
        </MentorTitle>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      </Card>
    )
  }
}

export default CommentForm;
