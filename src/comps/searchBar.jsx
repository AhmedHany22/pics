import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  setTerm = (e) => {
    this.setState({ term: e.currentTarget.value });
  };

  onSearch = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui search" onSubmit={this.onSearch}>
          <div className="ui icon input">
            <input
              type="text"
              className="prompt"
              placeholder="Search ..."
              value={this.state.term}
              onChange={this.setTerm}
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
