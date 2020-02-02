import React from 'react';
import { connect } from 'react-redux';
import { activateUser, closeUser } from './redux';

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.user.message || 'Hello'}</h1>

        {this.props.user.messagge ? (
          <button onClick={this.props.closeUser}>Logout User</button>
        ) : (
          <button
            onClick={() =>
              this.props.activateUser({ message: 'Welcome to the page!' })
            }
          >
            Click Me!
          </button>
        )}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  activateUser,
  closeUser,
};

const MyApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default MyApp;