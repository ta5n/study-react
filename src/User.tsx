import React from 'react';
import './App.css';

const user = {
  name: 'John Adams',
  age: 28,
  location: 'New York',
};
function getLocation(location: string) {
  if (location) {
    return location;
  }
  return 'Unknown';
}

function User() {
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {getLocation(user.location)}</p>
    </div>
  );
}

export default User;
