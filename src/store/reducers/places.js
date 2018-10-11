import {ADD_PLACE, DELETE_PLACE} from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(), 
                    name: action.placeName, 
                    image: {
                        uri: "https://avatars0.githubusercontent.com/u/28825133?s=400&u=f1f574ae604a8194a9f40d1291736a3a011bba64&v=4"
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                }),
                selectedPlace: null
            };
        default: 
            return state;
    }
}

export default reducer;