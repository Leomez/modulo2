export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE-FAVORITE';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const CLEAR_ID = 'CLEAR_ID';


export const getMovies = (title) => dispatch => {
    return fetch(`http://www.omdbapi.com/?&apikey=4352d24e&s=${title}`)
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

export const removeMovieFavorite = (id) => {
    return{
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}

export const clearDetail = () => {
    return {type: CLEAR_ID}
}

// export default [GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE]