import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';

export class MoviesList extends Component {

  render() {
    // console.log(this.props.movies)
    const { movies } = this.props;

    return <div className="row">{
      movies.Response === 'True' ? 
        movies.Search.map((movie, index) => (
          <Movie movie={movie} key={index}/>
        ))
        : null} 
      </div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies
});

export default connect(mapStateToProps)(MoviesList);