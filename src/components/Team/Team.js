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
      .then((rep) => this.setState({ players: rep }))
      .then((err) => console.error('unable to get players', err));
  }

  render() {
    const { players } = this.state;
    const pCards = players.map((player) => <PlayerCard key={player.id} player={player} getPlayers={this.getPlayers}/>);
    return (
      <div>
      {pCards}
      </div>
    );
  }
}

export default Team;
