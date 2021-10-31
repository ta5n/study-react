import React, { Component } from 'react';

export class Options extends Component {
  render() {
    return (
      <div>
        Options component here
        <Option />
      </div>
    );
  }
}

// each option class here
class Option extends Component {
  render() {
    return <div>This is an option</div>;
  }
}

export class AddOption extends React.Component {
  render() {
    return <div>Add option component</div>;
  }
}

export default Options;
