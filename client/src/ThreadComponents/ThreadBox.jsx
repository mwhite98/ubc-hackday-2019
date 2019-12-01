import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import '../App.css';
import {
  CommentBox,
  Name,
  Badge,
  Comment,
  MentorTitle,
} from './Styles';
import testData from './test_data';
import CommentForm from './CommentBox';
import Card from 'react-bootstrap/Card'

const mentorBadge = (status) => {
  let renderStatus = "Student";
  if (status) {
    renderStatus = "Mentor";
  }
  return (
    <Badge>
      {renderStatus}
    </Badge>
  )
}

const renderComments = () => {
  const { comments } = testData.thread;
  return comments.map(comment => {
    return (
      <div>
        <Card style={{ width: '90%' }} className="p-1">
          <Card.Body>
            <div>
              <Name>
                {comment.user_name}
              </Name>
              {mentorBadge(comment.mentor_status)}
            </div>
            <br />
            <Comment>
              {comment.message}
            </Comment>
          </Card.Body>
        </Card>
        <br />
      </div>
    )
  })
}

const ThreadBox = (props) => {
  const { comments } = testData.thread;

  return (
    <div className="thread-box">
      <Col className="p-2">
        <MentorTitle>
          {testData.thread.thread_title}
        </MentorTitle>
      </Col>
      <Col>
        {renderComments()}
        <CommentForm />
      </Col>
    </div>
  );
}

export default ThreadBox;