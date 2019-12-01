import React, { Component } from 'react';
import { MDBBadge, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import { Multiselect } from 'multiselect-react-dropdown';


// images
import { ReactComponent as Event } from './event.svg';
import { ReactComponent as Avatar } from './avatar.svg'

// css
import './App.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            threads: [],
            // tags: [{ name: 'career advice', id: 0}, { name: 'project', id: 1 }, {name: 'javascript questions', id: 2 }],
            tagNames: ['career advice', 'project', 'javascript'],
        };
        this.onSelect = this.onSelect.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.getTaggedThreads = this.getTaggedThreads.bind(this);
    }

    async componentDidMount() {
        // const threads = [];
        // threads.push({title: 'haha', tag: 'career advice'});
        // threads.push({title: 'hehe', tag: 'project'});
        // threads.push({title: 'hoho', tag: 'javascript'});

        // fetch threads
        await this.getTaggedThreads([]);
    }

    async getTaggedThreads(tags) {
        // do fetch threads
        const response = await fetch('/get-threads', tags);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        const threads = body.map(thread => {
            return thread;
        });
        await this.setState({...this.state, threads});
    }

    async onSelect(optionsList, selectedItem) {
        await this.getTaggedThreads(optionsList);
        // await this.setState({ ...this.state, threads });
    }

    async onRemove(optionsList, selectedItem) {
        await this.getTaggedThreads(optionsList);
        // await this.setState({ ...this.state, threads })
    }

    render() {
        const { props, state } = this;
        const threadCards = state.threads.map((thread, index) => {
            return (
                <MDBCard className="thread-card d-inline-block m-3" style={{ width: "15rem" }} >
                    <MDBCardBody>
                        <MDBCardTitle>{thread.title}</MDBCardTitle>
                        <MDBCardText>
                            {3 + index} <Event className="event-icon" />
                            <br />
                            {Math.floor((12 + index) / 2)} <Avatar className="avatar-icon" />
                            <br />
                            tags: {thread.tag}
                        </MDBCardText>
                        <MDBBtn size="sm" href="#">Go</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            );
        });
        return (
            <div>

                <MDBRow className="p-4 pt-4">
                    <MDBCol sm="3">
                        Search by tags:
                    </MDBCol>
                    <MDBCol>
                        <Multiselect
                            options={this.state.tagNames} // Options to display in the dropdown
                            isObject={false}
                            showCheckbox
                            onSelect={this.onSelect} // Function will trigger on select event
                            onRemove={this.onRemove} // Function will trigger on remove event
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        {threadCards}
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

export default Home;