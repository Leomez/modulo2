import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, clearDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {


    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }
    componentWillUnmount() {
        this.props.clearDetail()

    }
    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula
                <h2> {`Titulo: ${this.props.movieDetail.Title}`}</h2>
                <img src={this.props.movieDetail.Poster} alt="Img not found" />
                <h4>{`Año: ${this.props.movieDetail.Year}`}</h4>
                <h4>{`Duración: ${this.props.movieDetail.Runtime}`}</h4>
                <h4>{`Elenco: ${this.props.movieDetail.Actors}`}</h4>
                <h4>{`Director: ${this.props.movieDetail.Director}`}</h4>
                <h4>{`Premios: ${this.props.movieDetail.Awards}`}</h4>
                <h4>{`Ciudad: ${this.props.movieDetail.Country}`}</h4>

            </div>
        );
    }


}

function mapStateToProps(state) {
    return {
        movieDetail: state.movieDetail
    }
}

function mapDispachToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id)),
        clearDetail: () => dispatch(clearDetail())
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Movie);