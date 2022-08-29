import { GET_MOVIES } from "../actions/index";
import { GET_MOVIE_DETAIL } from "../actions/index";
import { ADD_MOVIE_FAVORITE } from "../actions/index";
import { REMOVE_MOVIE_FAVORITE } from "../actions/index";


const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDeatail: {}
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            // console.log(state.moviesLoaded);
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDeatail: action.payload 
            }            
        case ADD_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavorites: [...state.moviesFavorites, action.payload]
            }
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.filter(m => m.id !== action.payload)
            }
        default:
            return {...state}            
    }
}


export default rootReducer;