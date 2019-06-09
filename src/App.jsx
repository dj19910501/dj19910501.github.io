import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './Home/Home.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Home />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
