import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

import Container from './Container'

const locationInfo = {
  name: "Spring Lakes Golf Club",
  placeId: "ChIJbRDnhVcp1YkRBpOnX3ACSsc",
  location: { lat: 43.9680909112655, lng: -79.28693422068648 },
}

let defaultOptions = {
  scrollwheel: false,
  styles: [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8A8f98",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#fafafa",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          density: "sparse",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#adc2df",
        },
        {
          visibility: "on",
        },
      ],
    },
  ],
}

const loadingElementStyle = { height: "100%" };
const containerElementStyle = { height: "580px" };
const mapElementStyle = { height: "100%" };

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={locationInfo.location}
      defaultOptions={defaultOptions}
    >
      <Marker
        position={locationInfo.location}
      />
    </GoogleMap>
  ))
)

export default function GoogleMaps() {
  return (
    <Container>
      <RegularMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`}
        loadingElement={<div style={loadingElementStyle} />}
        containerElement={<div style={containerElementStyle} />}
        mapElement={<div style={mapElementStyle} />}
      />
    </Container>
  )
}