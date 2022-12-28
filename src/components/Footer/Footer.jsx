import React, { Component } from 'react';
import './Footer.scss';
class Footer extends Component {
    state = {  }
    render() { 
        return (<div className="foot">
    <div className="footer-bottom-wrapper">   
    <i class="fa fa-copyright" role="copyright"/>
    <span className="footer-bottom-rights"> - All Rights Reserved - </span>
    </div>
    <div className="social">
    <div className="li">-----</div>
            <div className="ins">-----</div>
            <div className="face">------</div>
    </div>
            
        </div>  );
    }
}
 
export default Footer;