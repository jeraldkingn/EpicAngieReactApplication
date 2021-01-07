import React, { Component } from 'react';

import { CardDeck } from 'react-bootstrap';
import '../../../Asset/Css/landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Oneironaut from '../BooksSubComponent/oneironaut';
import Desire from '../BooksSubComponent/desire';
import WalkAlong from '../BooksSubComponent/walkAlong';

class BooksDisplay extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <Oneironaut />
                    <Desire />
                    <WalkAlong />
                </CardDeck>
                <br/>
            </div>
        );
    }
}

export default BooksDisplay;
