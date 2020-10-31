import React, {Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
    maxWidth: '55%',
    maxHeight: '90%',
};
export class MapContainer extends Component {
    componentDidMount() {
        const google = window.google
        
        function initMap() {
            console.log("initMap")
            // The location of Uluru
            const uluru = { lat: -25.344, lng: 131.036 };
            // The map, centered at Uluru
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 4,
                center: uluru,
            });
            // The marker, positioned at Uluru
            const marker = new google.maps.Marker({
                position: uluru,
                map: map,
            });
        }
    }

    render() {  
        return (
            <div>
                <script>window.initMap = this.initMap(this)</script>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={
                        {
                            lat: 35.994034,
                            lng: -78.898621
                        }
                    }
                />
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyDX1INbzlxPKw8uF9zmK-2MXRlH9WDJzbI'
})(MapContainer);