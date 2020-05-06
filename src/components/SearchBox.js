import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  movieSearch,
  fetchAllMovies,
  turnLoading
} from '../actions/movieActions';

export class SearchBox extends Component {
  
  searchSubmitHandle = (e) => {
    e.preventDefault();
    this.props.fetchAllMovies(this.props.subject);
    this.props.turnLoading();
  };
  
  handleSearchChange = (e) => {
    this.props.movieSearch(e.target.value);
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
          <h1 id="search-title" className="display-4 mb-3">
            Search for Movies!
          </h1>
          <form id="searchForm"className="form-inline" onSubmit={this.searchSubmitHandle}>
            <input type="text" className="form-control mb-2" id="search-box" placeholder="Search..." onChange={this.handleSearchChange} />
            <button type="submit" className="btn btn-dark mb-2 ml-3">Search</button>
          </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subject: state.movie.subject
});

const mapDispatchToProps = dispatch => {
  return {
    movieSearch: (subject) => dispatch(movieSearch(subject)),
    fetchAllMovies: (subject) => dispatch(fetchAllMovies(subject)),
    turnLoading: () => dispatch(turnLoading()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);