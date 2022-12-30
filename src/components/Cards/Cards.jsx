import React, { Component } from "react";
import "./Cards.scss";
class Cards extends Component {
  state = {
    movie: "https://movie-imdb-shivam.netlify.app/",
    fotofab: "https://foto-fab-shivam.netlify.app",
    weather: "https://weather-details-shivam.netlify.app",
    kanban: "https://kanban-board-shivam.netlify.app",
    rps: "https://cosmiccallisto96.github.io/Rock-Paper-Scissor-Game/",
    sjl: "https://static-job-listing-shivam.netlify.app",
    bank: "",
    country: "https://cosmiccallisto96.github.io/Country-API/",
  };
  render() {
    return (
      <div className="cards">
        <a href={this.state[this.props.val]} >
        <img src={this.props.val} alt="img"></img>
        </a>
      </div>
    );
  }
}

export default Cards;
