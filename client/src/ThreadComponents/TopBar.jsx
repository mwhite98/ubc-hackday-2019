import React, { Component } from 'react';
import {
  MentorTitle,
  MentorBox,
  Name,
} from './Styles';
import testData from './test_data';
import AvatarIcon from './avataricon.png';
import { ReactComponent as Avatar } from '../avatar.svg'

const renderMentors = () => {
  const { mentors } = testData.thread;
  return mentors.map(mentor => {
    return (
      <div>
          {/* <img src={AvatarIcon} style={{ height: '2em;' }} alt="icon" /> */}
          <Avatar className="pb-1"/>
          <Name>
            {mentor}
          </Name>
        <br/>
      </div>
    );
  })
}

const TopBar = (props) => {

  return (
    <MentorBox className="p-4">
      <div className>
        <MentorTitle>
          Mentors
        </MentorTitle>
      </div>
      {renderMentors()}
    </MentorBox>
  );
}

export default TopBar;