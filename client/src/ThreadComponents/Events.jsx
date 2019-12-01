import React, { Component } from 'react';
import {
  Title,
  EventBox,
  Event,
  Name,
} from './Styles';
import testData from './test_data';

const renderEvents = () => {
  const { events } = testData.thread;
  return events.map(event => {
    return (
      <Event>
        <div>
          <Name>
            {event.title}
          </Name>
        </div>
        {event.location}
        {event.time}
      </Event>
    );
  })
}

const EventPanel = (props) => {

  return (

      <EventBox>
        <Title>
          Upcoming Events
        </Title>
        {renderEvents()}
      </EventBox>

  );
}

export default EventPanel;