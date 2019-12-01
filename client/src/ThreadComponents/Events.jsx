import React, { Component } from 'react';
import {
  Title,
  EventBox,
  Event,
  EventName,
} from './Styles';
import testData from './test_data';
import '../App.css';


const renderEvents = () => {
  const { events } = testData.thread;
  return events.map(event => {
    return (
      <div>
      <Event className="p-2">
        <div>
          <EventName>
            {event.title}
          </EventName>
          <br />
          <br />
          <br />
        </div>
        {event.location}
        <br />
        {event.time}
      </Event>
      <br />
      </div>
    );
  })
}

const EventPanel = (props) => {

  return (

      <EventBox className="p-2">
        <Title>
          Upcoming Events
        </Title>
        {renderEvents()}
      </EventBox>

  );
}

export default EventPanel;