import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPhotos} from "../../store/actions/galleryActions";

class Gallery extends Component {
    componentDidMount() {
        this.props.fetchPhotos();
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


const mapStateToProps = state => ({
    gallery: state.artists.artists,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
   fetchPhotos: () => dispatch(fetchPhotos())
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);