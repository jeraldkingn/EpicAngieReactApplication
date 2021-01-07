import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuotesDisplay from '../../SubComponent/Quotes/quotes'
import '../../../Asset/Css/landing.css';
import { Button } from 'react-bootstrap';


class QuotesComponent extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="common-margin header-title animate-pop-in" >Quotes</h2>
                    <div className="header-subtitle animate-pop-in">
                        <QuotesDisplay />
                    </div>
                    <div align="center" className="header-subtitle animate-pop-in">
                        <Button target="_blank"
                            href="https://www.yourquote.in/angelin-thoughts-x2qw/quotes"
                            className="header-button animate-pop-in"
                            style={{ marginTop: "2%", marginBottom: "2%" }}
                            variant="outline-light">Show more</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuotesComponent;
