import React, { Component } from 'react';

class GoogleMap extends Component {
    // this method will be called after the component has been rendered
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        return (
            <div ref="map" />
        );
    }
}

export default GoogleMap;