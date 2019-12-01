import React, { Component } from 'react';
import {
  MentorTitle,
  EventBox,
  Event,
  Name,
} from './Styles';
import testData from './test_data';
import AvatarIcon from './avataricon.svg';

const renderMentors = () => {
  const { mentors } = testData.thread;
  return mentors.map(mentor => {
    return (
      <div>
          <Name>
            {mentor}
          </Name>
          <svg>
            AvatarIcon
          </svg>
      </div>
    );
  })
}

const TopBar = (props) => {

  return (
    <div>
      <div>
        <MentorTitle>
          Mentors
        </MentorTitle>
      </div>
      {renderMentors()}
    </div>
  );
}

export default TopBar;