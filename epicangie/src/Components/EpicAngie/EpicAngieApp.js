import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeComponent from "../MainComponent/HomeComponent/homeComponent"
import QuotesComponent from "../MainComponent/QuotesComponent/quotesComponent"
import BooksComponent from "../MainComponent/BooksComponent/booksComponent"
import CollabrationComponent from "../MainComponent/CollabrationComponent/collabrationComponent"
import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

class EpicAngieApp extends Component {

    render() {
        return (
            <div className="EpicAngie1">
                <Router>
                    <>
                        <Route path="/" exact component={HomeComponent} />
                        <Route path="/home" component={HomeComponent} />
                        <Route path="/quotes" component={QuotesComponent} />
                        <Route path="/books" component={BooksComponent} />
                        <Route path="/contact-us" component={CollabrationComponent} />
                    </>
                </Router>
            </div>
        );
    }
}

export default EpicAngieApp;
