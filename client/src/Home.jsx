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
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "thread_tags": tags
            })
        }
        const response = await fetch('/get-threads', options);
        const body = await response.json();
        console.log('====', body);
        if (response.status !== 200) {
            throw Error(body.message)
        }
        const threads = body.threads.map(thread => {
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
            // const threadTags = '';
            // console.log(thread);
            // console.log(thread.tags);
            // thread.tags.map((tag, index) => {
            //     if (index !== 0) {
            //         threadTags = threadTags + ' ,' + tag;
            //     } else {
            //         threadTags = tag;
            //     }
            // });
            return (
                <MDBCard tabindex={index + 2} className="thread-card d-inline-block m-3" style={{ width: "15rem", height: "15rem" }} >
                    <MDBCardBody>
                        <MDBCardTitle className='thread-card-title'>{thread.title}</MDBCardTitle>
                        <MDBCardText>
                            {3 + index} <Event className="event-icon" alt="Event icon." />
                            <br />
                            {Math.floor((12 + index) / 2)} <Avatar className="avatar-icon" alt="Avatar icon." />
                            <br />
                            tags: {thread.tags}
                        </MDBCardText>
                        <MDBBtn size="sm" href="#" aria-label='Go to thread.'>>Go</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            );
        });
        return (
            <div className="p-4 justify-content-center">

                <MDBRow className="p-4 pt-4">
                    <MDBCol sm="3">
                        Search by tags:
                    </MDBCol>
                    <MDBCol>
                        <Multiselect
                            tabindex={1}
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