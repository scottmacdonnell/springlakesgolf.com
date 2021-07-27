import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel'

import Container from './ui/Container'
import * as Text from './ui/Text'

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
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          saturation: "0"
        },
        {
          lightness: "0"
        },
        {
          gamma: "1.00"
        }
      ],
    },
    {
      featureType: "landscape",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
        {
          weight: "1.43",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels",
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
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    }
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
      <MarkerWithLabel
        position={locationInfo.location}
        labelAnchor={new google.maps.Point(-16, 16)}
        labelStyle={{
          background: `#FFF`,
          padding: `8px 16px`,
          fontSize: '10px',
          color: `#000`,
          borderRadius: '5px',
          borderColor: '#666',
        }}
      >
        <div>
          <Text.Heading6 style={{ fontSize: '16px' }}>Spring Lakes Golf Club</Text.Heading6>
          <Text.Paragraph style={{ margin: '0', fontSize: '12px' }}>4962 Stouffville Rd</Text.Paragraph>
          <Text.Paragraph style={{ margin: '0', fontSize: '12px' }}>Whitchurch-Stouffville, ON L4A 3S8</Text.Paragraph>
        </div>
      </MarkerWithLabel>
    </GoogleMap>
  ))
)

export default function GoogleMaps() {
  return <RegularMap
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`}
    loadingElement={<div style={loadingElementStyle} />}
    containerElement={<div style={containerElementStyle} />}
    mapElement={<div style={mapElementStyle} />}
  />
}