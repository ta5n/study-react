import React from 'react';
import './App.css';

const userData = {
  name: 'John Adams',
  age: 29,
  location: 'New York',
};
function getLocation(location: string) {
  if (location) {
    return <p>Location: {location} </p>;
  }
}

function User() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{userData.name ? userData.name : 'Anonymous'}</h1>
        {userData.age >= 18 && <p>Age: {userData.age}</p>}
        {getLocation(userData.location)}
      </header>
    </div>
  );
}

export default User;
