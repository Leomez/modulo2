import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavorite } from "../../actions";
import './Buscador.css';




export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    //  let movies = this.props.movies
    // console.log(this.props.getMovies(this.state.title))

  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>

          {this.props.movies && this.props.movies.map(movie => {
            console.log(movie);
            return (<div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                <div>
                  pelicula:
                  {movie.Title}
                </div>
              </Link>
              <button onClick={() => this.props.addMovieFavorite({
                title: movie.Title,
                id: movie.imdbID

              })}>Fav</button>

            </div>)

          })}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movieId => dispatch(addMovieFavorite(movieId)),
    getMovies: title => dispatch(getMovies(title))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
