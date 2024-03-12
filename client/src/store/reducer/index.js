const initialState = {
    gamesLoaded: [],
    gamesSearched: [],
    gameDetail: {},
    filteredGenres: [],
    genres: [],
    platforms: [],
    source: ["api","local"],
    filteredSources: [],
    alphabetical: "",
    rating: ""
};

const rootReducer = (state=initialState,action) => {
   
    switch(action.type){

        case 'GET_VIDEOGAMES':
            return {
                ...state,
                gamesLoaded: action.payload.data
            }
        case 'GET_INFO':
            const genres = action.payload.genre.map(genre=>genre.name);
            const platforms = action.payload.platforms;
            return {
                ...state,
                genres: genres,
                platforms: platforms
            }
        case 'SEARCH_VIDEOGAMES':
            return {
                ...state,
                gamesSearched: action.payload
            }
        case 'GET_VIDEOGAME_DETAIL':
            return {
                ...state,
                gameDetail: action.payload.data
            }
        case 'ADD_GENRE':
            return {
                ...state,
                filteredGenres: state.filteredGenres.concat(action.payload)
            }
        case 'ADD_SOURCE':
            return {
                ...state,
                filteredSources: state.filteredSources.concat(action.payload)
            }
        case 'REMOVE_GENRE':
            return {
                ...state,
                filteredGenres: state.filteredGenres.filter(genre=>genre !== action.payload)
            }
        case 'REMOVE_SOURCE':
            return {
                ...state,
                filteredSources: state.filteredSources.filter(source=>source !== action.payload)
            }
        case 'ORDER_ALPHABETICAL':
            return {
                ...state,
                alphabetical: action.payload,
                rating: ""
            }
        case 'ORDER_RATING':
            return {
                ...state,
                rating: action.payload,
                alphabetical: ""
            }
        case 'CLEAN_VIDEOGAME_DETAIL':
            return {
                ...state,
                gameDetail: {}
            }
        case 'CLEAN_GAMES_SEARCHED':
            return {
                ...state,
                gamesSearched: []
            }                     
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;
