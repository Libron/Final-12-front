import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import GalleryUI from 'react-grid-gallery';
import {apiURL} from '../../constants';

import {deletePhoto, fetchPhotos} from "../../store/actions/galleryActions";
import {Badge, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import Spinner from "../../components/UI/Spinner/Spinner";

class Gallery extends Component {
    state = {
        pageTitle: 'All Photos'
    };

    componentDidMount() {
        this.props.fetchPhotos(this.props.location.search);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            this.props.fetchPhotos(this.props.location.search);
            if (!this.props.location.search) {
                this.setTitle('All Photos');
            }
        }
    }

    setTitle = (title) => {
        this.setState({...this.state, pageTitle: title})
    };

    render() {
        if (!this.props.gallery || this.props.loading) {
            return <Spinner />
        }

        if (this.props.gallery.length === 0) {
            return <h1>No photos !</h1>
        }

        const images = this.props.gallery.map(photo => {
            let removeBtn = null;

            try {
                if (this.props.user._id === photo.user._id) {
                    removeBtn = <span style={{color: 'red'}} onClick={() => this.props.deletePhoto(photo._id)}>REMOVE</span>
                }
            } catch (e) {
                removeBtn = null;
            }

            const badge = (
                <Fragment>
                    <NavLink style={{display: 'inline-block',color: 'orange'}} tag={RouterNavLink} to={`/gallery?uid=${photo.user._id}`} onClick={() => {this.setTitle(photo.user.name)}}>{photo.user.name}</NavLink>
                    {removeBtn}
                </Fragment>
            );

            return {
                src: apiURL + '/uploads/' + photo.image,
                thumbnail: apiURL + '/uploads/' + photo.image,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                tags: [{value: badge, title: photo.title}],
                caption: photo.title
            }
        });

        return (
            <div>
                <h2>{this.state.pageTitle}<Badge style={{margin: '0 10px'}} color="warning">{this.props.count}</Badge></h2>
                <GalleryUI
                    images={images}
                    enableImageSelection={false}
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    gallery: state.gallery.gallery,
    user: state.users.user,
    loading: state.gallery.loading,
    count: state.gallery.count
});

const mapDispatchToProps = dispatch => ({
   fetchPhotos: query => dispatch(fetchPhotos(query)),
   deletePhoto: id => dispatch(deletePhoto(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);