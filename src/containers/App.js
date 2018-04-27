import React, { Component } from 'react';
import CardList from '../components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwars: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people")
    .then (response => response.json())
    .then (users => this.setState( { starwars: users}))
  }

  render() {

    const { starwars } = this.state;

    return (
      <div className="tc">
        <h1>Star Wars Characters</h1>
          <CardList/>
      </div>
    );
  }
}

export default App;
