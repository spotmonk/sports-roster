import React, { useState, useEffect } from 'react';
import authData from '../../helpers/data/authData';

const PlayerForm = (props) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const setNameEvent = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const setPositionEvent = (e) => {
    e.preventDefault();
    setPosition(e.target.value);
  };

  const setImageUrlEvent = (e) => {
    e.preventDefault();
    setImageUrl(e.target.value);
  };

  const savePlayerEvent = (e) => {
    e.preventDefault();
    const newPlayer = {
      imageUrl,
      name,
      position,
      uid: authData.getUid(),
    };
    if (isEditing) {
      console.warn('editing');
    } else {
      props.addPlayer(newPlayer);
    }
  };

  useEffect(() => {
    if (props.player.name) {
      setName(props.player.name);
      setPosition(props.player.position);
      setImageUrl(props.player.imageUrl);
      setIsEditing(true);
    }
  }, []);

  return (
    <div>
      <div className="BoardForm mt-2 mb-2">
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" className="form-control" id="imageUrl" onChange={setImageUrlEvent} value={props.player.imageUrl}/>
          </div>
          <div className="form-group">
            <label htmlFor="playerName">Player Name</label>
            <input type="text" className="form-control" id="playerName" onChange={setNameEvent} value={props.player.name}/>
          </div>
          <div className="form-group">
            <label htmlFor="playerPosition">Player Position</label>
            <input type="text" className="form-control" id="playerPosition" onChange={setPositionEvent} value={props.player.position}/>
          </div>
          <button className="btn btn-primary" onClick={savePlayerEvent}>Save Player</button>
        </form>
      </div>
    </div>
  );
};

export default PlayerForm;
