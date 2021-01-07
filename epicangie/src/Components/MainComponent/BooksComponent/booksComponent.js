import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksDisplay from '../../SubComponent/Books/books'
import '../../../Asset/Css/landing.css';


class BooksComponent extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="common-margin header-title animate-pop-in" >Books and Poems</h2>
                    <div className="header-subtitle animate-pop-in">
                        <BooksDisplay />
                    </div>
                </div>
            </div>
        );
    }
}

export default BooksComponent;
