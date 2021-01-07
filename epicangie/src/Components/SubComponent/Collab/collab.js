
import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import '../../../Asset/Css/landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

class CollabDisplay extends Component {
    render() {
        return (
            <div style={{color:"white !important"}}>
                <h2>We are open for collabration works</h2>
                <h5>Feel free to reach us for valuable content 
                    writing and other language related works at reasonable price</h5>
                    <br/>
                <Button align="center" className="header-button animate-pop-in" target="_blank"
                            href="https://www.instagram.com/angelin_thoughts/"
                            variant="outline-light"><FontAwesomeIcon icon={faFacebookMessenger} /> Direct Message Epic Angie</Button>{' '}
           </div>
        );
    }
}

export default CollabDisplay;
