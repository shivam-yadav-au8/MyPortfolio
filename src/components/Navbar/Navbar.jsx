import React, { Component } from 'react';
import './Navbar.scss';
class Navbar extends Component {
    state = {
        clicked:false
      }

      handleCick=()=>{
          this.setState({clicked:!this.state.clicked});
      }
    render() { 
        return (<div className="navbar">
           
            <ul className="ul"><l1 className="hm"><i class="fas fa-bars" onClick={this.handleCick}></i></l1>
            {this.state.clicked? <>
            <l1>Home</l1>
            <l1>Projects</l1>
            <l1 className="cs">Coding Skills</l1>
            <l1>Contact</l1>
        </>: null}
        </ul>
        <ul className="ul1"><l1 className="hm"><i class="fas fa-bars" onClick={this.handleCick}></i></l1>
            {this.state.clicked? null: <>
            <l1>Home</l1>
            <l1>Projects</l1>
            <l1 className="cs">Coding Skills</l1>
            <l1>Contact</l1>
        </>}
        </ul>
        </div>  );
    }
}
 
export default Navbar;