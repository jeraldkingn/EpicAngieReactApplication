import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons"

function FollowUsDisplay() {
    const marginTop2cen = {
        display: "inline-block",
        color: "rgb(255,255,255)",
        marginTop: "3%"
    };

    return (
        <div>
            <h5 className="header-title animate-pop-in" style={{ color: 'white' }}>Reach us</h5>
            <div className="header-title animate-pop-in" style={marginTop2cen}>
                <a style={{ color: 'white' }} href={"www.google.com"}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a style={{ marginLeft: "15px", color: 'white' }} href={"www.google.com"}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a style={{ marginLeft: "15px", color: 'white' }} href={"www.google.com"}><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
            </div>
        </div>

    );
}

export default FollowUsDisplay;
