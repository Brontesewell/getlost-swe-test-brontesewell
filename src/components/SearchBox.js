import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  movieSearch,
  fetchAllMovies,
  turnLoading
} from '../actions/movieActions';

export class SearchBox extends Component {


  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
          <h1 id="search-title" className="display-4 mb-3">
            Search for Movies!
          </h1>
          <form id="searchForm"class="form-inline" >
            <input type="text" className="form-control mb-2" id="search-box" placeholder="Search..." />
            <button type="submit" className="btn btn-dark mb-2 ml-3">Search</button>
          </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);