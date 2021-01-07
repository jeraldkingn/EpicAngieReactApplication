
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faQuoteLeft, faPen } from '@fortawesome/free-solid-svg-icons'
import '../../../Asset/Css/landing.css';

import FollowUsDisplay from "../../SubComponent/Follow/follow";
import gifImage from '../../../Asset/Img/gif/landing_gif.gif';

import 'bootstrap/dist/css/bootstrap.min.css';

class LandingContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h2 className="heading-margin header-title animate-pop-in" >Believe in yourself and where you're going</h2>
                        <p style={{ color: '#c8cbcf', marginTop: "20px" }} className="header-subtitle animate-pop-in">Pay a call on eligraph, to make your memorandum more credible and creative</p>
                        <br />
                        <div className="marginTop2cen" >
                            <Button className="header-button animate-pop-in" href="/quotes" variant="outline-light"><FontAwesomeIcon icon={faQuoteLeft} />&nbsp;&nbsp;Quotes</Button>{' '}
                            <Button className="header-button animate-pop-in" href="/books" style={{ marginLeft: "10px" }} variant="outline-light"><FontAwesomeIcon icon={faBook} />&nbsp;&nbsp;Books</Button>{' '}
                            <Button className="header-button animate-pop-in" href="/reviews" style={{ marginLeft: "10px" }} variant="outline-light"><FontAwesomeIcon icon={faPen} />&nbsp;&nbsp;Reviews</Button>{' '}

                        </div>
                        <div className="commonHeadSpace">
                            <FollowUsDisplay />
                        </div> 
                    </div>
                    <div className="col-md-2"></div>
                    <div style={{ marginTop: "8%" }} align="center" className="col-md-5">
                        <img className="img-fluid header-subtitle animate-pop-in"
                            src={gifImage}
                            width="400" height="400" />
                    </div>
                </div>
            </div>

        );
    }
}

export default LandingContent;
