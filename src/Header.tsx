import React, { Component } from 'react';

interface IRecipeProps {
  title?: string;
  subtitle?: string;
}

interface IRecipeState {}

export class Header extends Component<IRecipeProps, IRecipeState> {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

export default Header;
