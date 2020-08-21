import React from 'react';
import PropTypes from 'prop-types';
import playerData from '../../helpers/data/playerData';

class Player extends React.Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    getPlayers: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    const { player, getPlayers } = this.props;
    e.preventDefault();
    playerData.deletePlayerById(player.id);
    getPlayers();
  }

  render() {
    const { player, getPlayers } = this.props;
    return (
      <div className="card" style={{ width: '18rem' }}>
        <div><button onClick={getPlayers}>Refresh</button></div>
        <div className="col-sm-2 offset-sm-10"><button onClick={this.deletePlayerEvent} className="btn btn-danger">X</button></div>
        <img src={[player.imageUrl]} className="card-img-top" alt="a football player" />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
        </div>
      </div>
    );
  }
}

export default Player;
