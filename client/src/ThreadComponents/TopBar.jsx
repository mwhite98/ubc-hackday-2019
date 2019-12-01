import React, { Component } from 'react';
import {
  MentorTitle,
  MentorBox,
  Name,
} from './Styles';
import testData from './test_data';
import AvatarIcon from './avataricon.png';
import { ReactComponent as Avatar } from './avataricon.svg'

const renderMentors = () => {
  const { mentors } = testData.thread;
  return mentors.map(mentor => {
    return (
      <div>
          <img src={AvatarIcon} style={{ height: '25px;' }} alt="icon" />
          <Name>
            {mentor}
          </Name>
      </div>
    );
  })
}

const TopBar = (props) => {

  return (
    <MentorBox>
      <div>
        <MentorTitle>
          Mentors
        </MentorTitle>
      </div>
      {renderMentors()}
    </MentorBox>
  );
}

export default TopBar;