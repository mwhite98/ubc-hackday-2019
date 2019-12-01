import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import {
  CommentBox,
  Name,
  Badge,
  Comment,
} from './Styles';
import testData from './test_data';
import CommentForm from './CommentBox';

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
      <CommentBox>
        <div>
          <Name>
            {comment.user_name}
          </Name>
          {mentorBadge(comment.mentor_status)}
        </div>
        <br />
        <br />
        <Comment>
          {comment.message}
        </Comment>
      </CommentBox>
    );
  })
}

const ThreadBox = (props) => {
  const { comments } = testData.thread;

  return (
    <div>
      <Col>
        Topic
      </Col>
      <Col>
        {renderComments()}
        <CommentForm />
      </Col>
    </div>
  );
}

export default ThreadBox;