import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import TopBar from './ThreadComponents/TopBar';
import ThreadBox from './ThreadComponents/ThreadBox';
import EventPanel from './ThreadComponents/Events';
import test_data from './ThreadComponents/test_data';

class Thread extends Component {

  render () {
    return (
      <div>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <TopBar />
              </Col>
            </Row>
            <Row>
              <Col>
              <ThreadBox />
              </Col>
            </Row>
          </Col>
          <Col lg={3.5}>
            <EventPanel />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

// class Thread extends Component {

//   render () {
//     return (
//       <div>
//       <Container>
//         <Row>
//         <Col sm={9} md={9} lg={9}>
//           <Row>
//             <TopBar />
//           </Row>
//           <Row>
//             <ThreadBox />
//           </Row>
//         </Col>
//         <Col sm md lg={3}>
//           <EventPanel />
//         </Col>
//         </Row>
//       </Container>
//       </div>
//     );
//   }
// }

export default Thread;
