import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.searchHandler}>
          <input type="text" placeholder="Enter your city"/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }
}

export default Search;