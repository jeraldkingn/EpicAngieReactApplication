import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollabDisplay from '../../SubComponent/Collab/collab';
import '../../../Asset/Css/landing.css';
import FollowUsDisplay from '../../SubComponent/Follow/follow'

class BooksComponent extends Component {
    render() {
        return (
            <div>
                <div className="container collab">
                    <h2 className="common-margin header-title animate-pop-in" >Love our works ??</h2>
                    <div className="header-subtitle animate-pop-in">
                        <CollabDisplay />
                    </div>
                    <div style={{marginTop:"7%"}}>
                    <FollowUsDisplay />
                    </div>
                    
                </div>
               
                           
               
               
            </div>
        );
    }
}

export default BooksComponent;
