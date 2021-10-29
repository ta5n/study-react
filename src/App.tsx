import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const formSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    option: { value: string };
  };
  const optionEntered = target.option.value;

  if (optionEntered) {
    appData.options.push(optionEntered);
    target.option.value = '';
  }
  renderApp();
};

const appData: { title: string; subTitle: string; options: string[] } = {
  title: 'Indecision App',
  subTitle: 'This is some info',
  options: [],
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * appData.options.length);
  console.log(randomNum);
};
const removeAll = () => {
  appData.options.length = 0;
  renderApp();
};

const numbers = [42, 99, 999];

function WelcomeMessage() {
  return <h2>Hey Welcome 🙋‍♂️</h2>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{appData.title}</h1>
        <WelcomeMessage />
        {appData.subTitle && <p>{appData.subTitle}</p>}
        {appData.options.length > 0 ? 'Here are your options' : 'No options'}
        <p>{appData.options.length}</p>
        <button disabled={appData.options.length === 0} onClick={makeDecision}>
          What should I do?
        </button>
        <button onClick={removeAll}>Remove All</button>
        {/* {[98, 97, 97, 'Mike Smith', null, undefined, true]} */}
        {/* {[<p key="11">a</p>, <p key="22">b</p>, <p key="23">c</p>]}
        {[<p key="1">01</p>, <p key="2">02</p>, <p key="3">03</p>, <p key="4">04</p>]} */}
        {/* {numbers.map(num => {
          return <p key={num}>Number: {num}</p>;
        })} */}
        <ol>
          {appData.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ol>
        <form onSubmit={formSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </header>
    </div>
  );
}

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default App;
