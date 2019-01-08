import React from 'react';
import Emoji from '../Emoji';

class Search extends React.Component {
  searchRef = React.createRef();

  render = () => {
    return (
      <>
        <p>Search for Emoji by name</p>
        <input
          ref={this.searchRef}
          type="text"
          onChange={this.search}
          class="search"
        />
      </>
    );
  };

  search = () => {
    const text = this.searchRef.current.value;
    const results = [];

    if (text === '') {
      this.props.setResults([]);
      return;
    }

    Emoji.forEach(emoji => {
      emoji.aliases.forEach(alias => {
        if (alias.startsWith(text)) {
          results.push({emoji: emoji.emoji, alias: alias});
        }
      });
    });

    this.props.setResults(results);
  };
}

export default Search;
