import React from 'react';

class Results extends React.Component {
  render = () => {
    return (
      <div id="results">
        {this.props.results.map(res => {
          return (
            <div class="result">
              <p key={res.alias}>{res.emoji}</p>
            </div>
          );
        })}
      </div>
    );
  };
}

export default Results;
