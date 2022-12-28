import React, { Component } from 'react';
import './Cards.scss';
class Cards extends Component {
    state = {  }
    render() { 
        return (<div className="cards">
            <img src={this.props.val} alt="img"></img>

        </div>);
    }
}
 
export default Cards;