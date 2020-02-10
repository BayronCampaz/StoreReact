import React, { Component } from 'react';
import './App.css';
import GameList from './components/game/GameList';
import GameForm from './components/game/GameForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      owner: "Bayron",
      games: [
        { id: 1, name: "Super Mario Bros", type:"Arcade", price: "30000" },
        { id: 2, name: "Call of Duty", type:"FPS", price:"200000"},
        { id: 3, name:"Celeste", type: "Plataformero", price:"45000"}
      ]
    }
  }

  handleAddGame(game){
    let games = this.state.games;
    games.push(game);
    this.setState({
        games: games
    })
}

  render() {
    return (
      <div className="container">
        <GameList owner={this.state.owner} games={this.state.games} />
        <GameForm onSubmit={this.handleAddGame.bind(this)} />
      </div>
    );
  }
}

export default App;
