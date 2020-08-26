import React from 'react';
import PropTypes from 'prop-types';

class Player extends React.Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    selectEditPlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { player, selectEditPlayer } = this.props;
    selectEditPlayer(player);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="card m-4" style={{ width: '18rem' }}>
        <div className="btn-group" role="group">
        <button className="btn btn-warning" onClick={this.editPlayerEvent}><i className="fas fa-edit"></i></button>
        <button className="btn btn-danger" onClick={this.deletePlayerEvent}>X</button>
        </div>
        <img src={[player.imageUrl]} className="card-img-top" alt="a football player" />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <h5 className="card-title">Position: {player.position}</h5>
        </div>
      </div>
    );
  }
}

export default Player;
