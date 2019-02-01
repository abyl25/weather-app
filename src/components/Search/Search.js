import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  render() {
    return (
      <div>
        <form className="search_form" onSubmit={this.props.searchHandler}>
          <h2 className="title">Weather Info</h2>
          <input type="text" className="search_input" placeholder="Enter your city"/>
          <input type="submit" className="search_btn" value="Search"/>
        </form>
      </div>
    );
  }
}

export default Search;