import React, { Component } from 'react';
import { connect } from 'react-redux';

export class MoviesList extends Component {

  render() {
    const { movies } = this.props;

    return <div className="row">
      <h1>Map through Movies</h1>
      </div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies
});

export default connect(mapStateToProps)(MoviesList);