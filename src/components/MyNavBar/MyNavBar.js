import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavBar extends React.Component {
  loadLogOut = () => {
    const { authed } = this.props;
    if (authed) {
      return <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.logOutEvent}>Log Out <i className="fas fa-sign-out-alt"></i></button>;
    }
    return <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.logInEvent}>Log In</button>;
  }

  logInEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  logOutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark">
          <div className="navbar-brand">Sports Roster</div>
          {this.loadLogOut()}
        </nav>
      </div>
    );
  }
}

export default MyNavBar;
