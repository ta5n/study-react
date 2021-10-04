import React from 'react';
import arrow from './arrow.svg';

console.log('ES6 Arrow is loaded!');

/*
const square = function (x: number): number {
  return x * x;
};

console.log(`square of 3 is ${square(3)}`);

// const squareArrow = (x: number): number => {
//   return x * x;
// };

const squareArrow = (x: number): number => x * x;

console.log(`square of 4 is ${squareArrow(4)}`);
*/

/*
const getFirstNameLongArrow = (fullName: string): string => {
  return fullName.split(' ')[0];
};

const getFirstName = (fullName: string): string => fullName.split(' ')[0];

console.log('John Doe arrow:>> ', getFirstNameLongArrow('John Doe'));
console.log('John Doe :>> ', getFirstName('John Doe'));
*/
// NOTE: this keyword

interface IUser {
  name: string;
  cities: Array<string>;
  printPlacesLived: Function;
  printPastCities: Function;
  printCitiesLived: Function;
}

const user: IUser = {
  name: 'John',
  cities: ['Istanbul', 'Ankara', 'Izmir'],
  printCitiesLived: () => {
    console.log('He lived in Turkey');
    // this will not work
  },
  printPastCities: function () {
    console.log('this.cities :>> ', this.cities);
  },
  printPlacesLived(): void {
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach((city: string): void => {
      console.log(`${this.name} has lived in ${city}.`);
    });
  },
};
user.printPlacesLived();

const multiplier = {
  numbers: [2, 3, 5],
};
console.log('result :>> ', multiplier);
function ES6Arrow() {
  return (
    <div className="ES6Arrow">
      <header className="Arrow-Header">
        <img src={arrow} alt="logo" className="Arrow-logo" width="5%" />
        <p>
          Edit <code>src/playground/es6-arrow.tsx</code> and save to reload.
        </p>
        <a className="Arrow-link" href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
          Home Page
        </a>
      </header>
    </div>
  );
}

export default ES6Arrow;
