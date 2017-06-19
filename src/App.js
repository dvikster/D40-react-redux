import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateTitle, closeTitle, } from './redux';

// App.js
export class App extends Component {
  render() {
    return (
      <div>

        <h1>{this.props.text.titles || 'This is first component'}</h1>

        {this.props.text.titles ?
          <button className="exit" onClick={this.props.closeTitle}>
            Exit
          </button> :
          <button onClick={() => this.props.activateTitle({ titles: 'This is second!' })}>
            Click Me!
          </button>
       }

      </div>
    );
  }

}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  text: state.text,
});

const mapDispatchToProps = {
  activateTitle,
  closeTitle,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
