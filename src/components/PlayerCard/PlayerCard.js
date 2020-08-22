import React from 'react';
import PropTypes from 'prop-types';

class Player extends React.Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="card" style={{ width: '18rem' }}>
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
