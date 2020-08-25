import React from 'react';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import PlayerCard from '../PlayerCard/PlayerCard';
import PlayerForm from '../PlayerForm/PlayerForm';

class Team extends React.Component {
  state = {
    players: [],
    formOpen: false,
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((resp) => this.setState({ players: resp }))
      .catch((err) => console.error('unable to get players', err));
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayerById(playerId)
      .then(() => this.getPlayers())
      .catch((err) => console.error("couldn't delete", err));
  }

  addPlayer = (playerObj) => {
    playerData.addPlayer(playerObj)
      .then(() => this.getPlayers())
      .catch((err) => console.error("couldn't add player", err));
  }

  render() {
    const { players, formOpen } = this.state;
    const pCards = players.map((player) => <PlayerCard key={player.id} player={player} deletePlayer={this.deletePlayer}/>);
    return (
      <div>
        <button className="btn btn-warning" onClick={ () => { this.setState({ formOpen: !formOpen }); }}>Add Player</button>
        {formOpen ? <PlayerForm addPlayer={this.addPlayer} /> : ''}
      {pCards}
      </div>
    );
  }
}

export default Team;
