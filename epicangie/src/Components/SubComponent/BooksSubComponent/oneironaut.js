import React, { Component } from 'react';

import { Card, Button } from 'react-bootstrap';
import '../../../Asset/Css/landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookReader } from '@fortawesome/free-solid-svg-icons'

import oneironaut from '../../../Asset/Img/books/oneironaut.jpg'

class Oneironaut extends Component {
    render() {
        return (
                <Card className="BooksCard">
                    <Card.Img variant="top"
                        src={oneironaut}/>
                    <Card.Body>
                        <Card.Title>Oneironaut</Card.Title>
                        <Card.Text style={{color:'gray'}}>
                            She Is An Orphan, Independent, Sassy Girl Who Loves To Travel Alone To Explore The Beauties Of World.
                            Let's Get Into Her Solitary World.
                            </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="header-button animate-pop-in" target="_blank"
                            href="https://readthisonce.000webhostapp.com/"
                            variant="outline-light"><FontAwesomeIcon icon={faBookReader} />&nbsp;&nbsp;Explore her life</Button>{' '}
                    </Card.Footer>
                </Card>
           
        );
    }
}

export default Oneironaut;
