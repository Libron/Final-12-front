import axios from '../../axios-api';
import {push} from 'connected-react-router';
import {NotificationManager} from "react-notifications";

export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const UPLOAD_PHOTO_REQUEST = 'FETCH_PHOTO_REQUEST';
export const UPLOAD_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS';
export const UPLOAD_PHOTO_FAILURE = 'FETCH_PHOTO_FAILURE';

export const DELETE_PHOTO_REQUEST = 'DELETE_PHOTO_REQUEST';
export const DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS';
export const DELETE_PHOTO_FAILURE = 'DELETE_PHOTO_FAILURE';

export const fetchPhotosRequest = () => ({type: FETCH_PHOTOS_REQUEST});
export const fetchPhotosSuccess = photos => ({type: FETCH_PHOTOS_SUCCESS, photos});
export const fetchPhotosFailure = error => ({type: FETCH_PHOTOS_FAILURE, error});

export const uploadPhotoRequest = () => ({type: UPLOAD_PHOTO_REQUEST});
export const uploadPhotoSuccess = photo => ({type: UPLOAD_PHOTO_SUCCESS, photo});
export const uploadPhotoFailure = error => ({type: UPLOAD_PHOTO_FAILURE, error});

export const deletePhotoRequest = () => ({type: DELETE_PHOTO_REQUEST});
export const deletePhotoSuccess = photo => ({type: DELETE_PHOTO_SUCCESS, photo});
export const deletePhotoFailure = error => ({type: DELETE_PHOTO_FAILURE, error});

export const fetchPhotos = (query) => {
    return dispatch => {
        dispatch(fetchPhotosRequest());
        let url = '/gallery';
        if (query) {
            url += query;
        }
        return axios.get(url).then(
            response => dispatch(fetchPhotosSuccess(response.data)),
            error => dispatch(fetchPhotosFailure(error))
        );
    };
};

export const uploadPhoto = data => {
    return dispatch => {
        dispatch(uploadPhotoRequest());
        return axios.post('/gallery', data).then(
            response => {
                dispatch(uploadPhotoSuccess(response.data));
                dispatch(push('/'));
            },
            error => dispatch(uploadPhotoFailure(error))
        )
    }
};

export const deletePhoto = id => {
    return dispatch => {
        dispatch(deletePhotoRequest());
        return axios.delete('/gallery/' + id).then(
            response => {
                NotificationManager.success('Photo removed');
                dispatch(deletePhotoSuccess(response.data));
            },
            error => dispatch(deletePhotoFailure(error))
        );
    };
};