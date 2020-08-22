import React from 'react';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import PlayerCard from '../PlayerCard/PlayerCard';

class Team extends React.Component {
  state = {
    players: [],
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

  render() {
    const { players } = this.state;
    const pCards = players.map((player) => <PlayerCard key={player.id} player={player} deletePlayer={this.deletePlayer}/>);
    return (
      <div>
      {pCards}
      </div>
    );
  }
}

export default Team;
