import axios from '../../axios-api';

export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const FETCH_PHOTO_REQUEST = 'FETCH_PHOTO_REQUEST';
export const FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS';
export const FETCH_PHOTO_FAILURE = 'FETCH_PHOTO_FAILURE';

export const fetchPhotosRequest = () => ({type: FETCH_PHOTOS_REQUEST});
export const fetchPhotosSuccess = photos => ({type: FETCH_PHOTOS_SUCCESS, photos});
export const fetchPhotosFailure = error => ({type: FETCH_PHOTOS_FAILURE, error});

export const fetchPhotoRequest = () => ({type: FETCH_PHOTO_REQUEST});
export const fetchPhotoSuccess = photo => ({type: FETCH_PHOTO_SUCCESS, product});
export const fetchPhotoFailure = error => ({type: FETCH_PHOTO_FAILURE, error});

export const fetchPhotos = () => {
    return dispatch => {
        dispatch(fetchPhotosRequest());
        return axios.get('/gallery').then(
            response => dispatch(fetchPhotosSuccess(response.data)),
            error => dispatch(fetchPhotosFailure(error))
        );
    };
};

export const fetchPhoto = id => {
    return dispatch => {
        dispatch(fetchPhotoRequest());
        return axios.get('/gallery/' + id).then(
            response => dispatch(fetchPhotoSuccess(response.data)),
            error => dispatch(fetchPhotoFailure(error))
        );
    };
};