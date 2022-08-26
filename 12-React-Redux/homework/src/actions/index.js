const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
const ADD_MOVIE_FAVORITE = 'ADD_MOVIE-FAVORITE';
const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE'

export const getMovies = (titulo) => dispatch => {
    return fetch(`http://www.omdbapi.com/?&apikey=4352d24e&s=${titulo}`)
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_MOVIES,
            payload: data
        }))   
}

export const getMovieDetail = (id) => dispatch => {
    return fetch(`http://www.omdbapi.com/?&apikey=4352d24e&i=${id}`)
    .then(res => res.json())
    .then(detalle => dispatch({
        type: GET_MOVIE_DETAIL,
        payload: detalle
    }))
   }

export const addMovieFavorite = (id) => {
    return {
        type: ADD_MOVIE_FAVORITE,
        payload: id
    }
}

export const removeeMovieFavorite = (id) => {
    return{
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}

export default {GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE}