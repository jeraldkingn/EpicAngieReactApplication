import React, { Component } from 'react';

import { Card, Button } from 'react-bootstrap';
import '../../../Asset/Css/landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookReader } from '@fortawesome/free-solid-svg-icons'

import desire from '../../../Asset/Img/books/desire.jpg'

class Desire extends Component {
    render() {
        return (
            <Card className="BooksCard">
                <Card.Img variant="top"
                    src={desire} />
                <Card.Body>
                    <Card.Title>Desire</Card.Title>
                    <Card.Text style={{ color: 'gray' }}>
                        Life is all about lessons,
                        Learn and explore,
                        Attract what you expect....
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

export default Desire;
