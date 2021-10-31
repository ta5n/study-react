import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options, { AddOption } from './Options';

export class Indecision extends Component {
  render() {
    const title = 'Indecision🤷';
    const subtitle = 'Let computer💻 decide what you should do!';
    const options = ['Task 1', 'Task 2', 'Task 4'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

export default Indecision;
