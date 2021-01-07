import React, { Component } from 'react';

import { Card, Button } from 'react-bootstrap';
import '../../../Asset/Css/landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookReader } from '@fortawesome/free-solid-svg-icons'

import walkAlong from '../../../Asset/Img/books/walkAlong.jpg'

class WalkAlong extends Component {
    render() {
        return (
                <Card className="BooksCard">
                    <Card.Img variant="top"
                        src={walkAlong}/>
                    <Card.Body>
                        <Card.Title>Walk Along the Foot Steps</Card.Title>
                        <Card.Text style={{color:'gray'}}>
                            She Is An Orphan, Independent, Sassy Girl Who Loves To Travel Alone.
                            </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="header-button animate-pop-in" target="_blank"
                            href="https://readthisonce.000webhostapp.com/"
                            variant="outline-light"><FontAwesomeIcon icon={faBookReader} />&nbsp;&nbsp;Continue Reading</Button>{' '}
                    </Card.Footer>
                </Card>
           
        );
    }
}

export default WalkAlong;
