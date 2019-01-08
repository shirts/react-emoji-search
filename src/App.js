import React, {Component} from 'react';
import Search from './components/Search';
import Results from './components/Results';
import './App.css';

class App extends Component {
  state = {
    results: [],
  };

  setResults(results) {
    this.setState({results});
  }

  render() {
    return (
      <>
        <Search setResults={this.setResults.bind(this)} />
        <Results results={this.state.results} />
      </>
    );
  }
}

export default App;
