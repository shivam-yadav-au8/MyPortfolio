import React, { Component } from 'react';
import './Experience.scss';
class Experience extends Component {
    state = {  }
    render() { 
        return (<div className="exp">
            <h1>Coding Skills</h1>
            <div className="container">
            <a  className="codechef" rel="stylesheet" href="https://www.codechef.com/users/cosmic_calisto">
           
                
                <div className="star">&#9734;&#9734;&#9734;&#9734;<div>Global Rank:15216</div></div>
                
            </a>
            <a className="hackerrank" href="https://www.hackerrank.com/shivamyadav_s_k1">
            <div className="star">&#9734;&#9734;&#9734;&#9734;&#9734; <div>Questions Solved:100+</div></div>
               
            </a>
                   
            
            <a className="hackerearth" href="http://www.hackerearth.com/@speedy.shivam.96"> <div>Questions Solved:100+</div></a>
            <a className="gfg" href="">
            <div>Questions Solved:100+</div>
            </a>
            <a className="lc"> <div>Questions Solved:100+</div></a>
            <a className="ib">
            <div>Questions Solved:100+</div>
            </a>
            </div>
            
        </div>  );
    }
}
 
export default Experience;