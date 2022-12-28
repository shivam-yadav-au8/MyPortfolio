import React, { Component } from 'react';
import './Projects.scss';
import Cards from '../Cards/Cards';
import bank from '../../assests/bank.png';
import movie from '../../assests/movie.png';
import country from '../../assests/country.png';
import fotofab from '../../assests/fotofab.png';
import kanban from '../../assests/kanban.png';
import rps from '../../assests/rps.png';
import sjl from '../../assests/sjl.png';
import weather from '../../assests/weather.png';
class Projects extends Component {
    state = { 
        img:[movie,fotofab,weather,kanban,,rps,sjl,,bank,country]
     }
    render() { 
        return (<div className="projects">
            <h1>Projects</h1>
            <div className="card-container">
            {this.state.img.map(v=><Cards val={v}/>)}
           

        </div> 
        </div> );
    }
}
 
export default Projects;