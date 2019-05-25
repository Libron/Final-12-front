import {
    FETCH_PHOTO_FAILURE,
    FETCH_PHOTO_REQUEST,
    FETCH_PHOTO_SUCCESS, FETCH_PHOTOS_FAILURE,
    FETCH_PHOTOS_REQUEST,
    FETCH_PHOTOS_SUCCESS
} from "../actions/galleryActions";

const initialState = {
    gallery: [],
    photo: null,
    loading: false,
    error: null
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTOS_REQUEST:
        case FETCH_PHOTO_REQUEST:
            return {...state, loading: true};
        case FETCH_PHOTOS_SUCCESS:
            return {...state, gallery: action.photos, loading: false};
        case FETCH_PHOTO_SUCCESS:
            return {...state, photo: action.photo, loading: false};
        case FETCH_PHOTO_FAILURE:
        case FETCH_PHOTOS_FAILURE:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default galleryReducer;