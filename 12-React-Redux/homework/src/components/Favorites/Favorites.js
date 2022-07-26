import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     title: ""
  //   }
  // }
  
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies && this.props.movies.map(movie => {
            return(
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>   
                <div>Pelicula: {movie.title} </div>
                </Link>
                <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}
 function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites
  }
 }

 function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movieId => dispatch(removeMovieFavorite(movieId))
  }
 }

// export default (ConnectedList);
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
