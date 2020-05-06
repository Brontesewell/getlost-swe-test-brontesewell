import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import MoviesList from './MoviesList';

export class MovieHome extends Component {


  render() {
    return (
      <div className="container">
        <SearchBox />
        {this.props.loading ? <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div> : <MoviesList />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movie.loading,
});

export default connect(mapStateToProps)(MovieHome);