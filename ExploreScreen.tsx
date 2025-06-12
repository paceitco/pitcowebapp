// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
// import { scale, verticalScale } from 'react-native-size-matters'
// import { Platform, StyleSheet, View } from 'react-native'
// // import MapView from "react-native-maps";
// // import { Marker } from 'react-native-maps';

// const containerStyle = {
//   width: scale(800), // '400px',
//   height: verticalScale(600), // '400px',
//   marginLeft: 'auto',
//   marginRight: 'auto',
// }

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// }

// let ExploreScreen: React.ComponentType;

// if (Platform.OS === 'web') {
//   ExploreScreen = () => {
//     const { isLoaded } = useJsApiLoader({
//       id: 'google-map-script',
//       // googleMapsApiKey: 'AIzaSyBNEIGF4rMp7oJE_rgM55ekf0S2d2r1rPU',
//       googleMapsApiKey: 'AIzaSyBbsRLp5lajZYRkCLfAMuii0enZ6j2H55U',
//     })

//     const [map, setMap] = React.useState(null)
    
//     const onLoadCallback = (map: any) => {
//       // This is just an example of getting and using the map instance!!! don't just blindly copy!
//       const bounds = new window.google.maps.LatLngBounds(center)
//       map.fitBounds(bounds)

//       setMap(map)
//     }

//     const onLoad = React.useCallback(onLoadCallback, [])

//     const callback = (map: any) => {
//         setMap(map)
//     }
//     const onUnmount = React.useCallback(callback, [])

//     return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         {/* Child components, such as markers, info windows, etc. */}
//         <></>
//       </GoogleMap>
//     ) : (
//       <></>
//     )
//   }
// } else if (Platform.OS === 'android') {
//   // Native implementation using react-native-maps
//   let MapView = require('react-native-maps').default;
//   let { Marker } = require('react-native-maps');
//   // import { MapView, Marker } from 'react-native-maps';

//   ExploreScreen = () => (
//     <View style={styles.nativeMapWrapper}>
//       <MapView
//         style={styles.nativeMap}
//         initialRegion={{
//           latitude: -33.918861,
//           longitude: 18.4233,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         zoomEnabled={true}
//         scrollEnabled={true}
//       >
//         <Marker coordinate={{ latitude: -33.918861, longitude: 18.4233 }} />
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   webMapWrapper: {
//     height: 300,
//     width: '100%',
//     marginVertical: 10,
//     overflow: 'hidden',
//   },
//   webMap: {
//     height: '100%',
//     width: '100%',
//   },
//   nativeMapWrapper: {
//     height: 300,
//     width: '100%',
//     marginVertical: 10,
//   },
//   nativeMap: {
//     flex: 1,
//   },
// });

// export default React.memo(ExploreScreen)


import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { GoogleMap, LoadScript, Marker as WebMarker } from '@react-google-maps/api';

const INITIAL_REGION: Region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

// Replace with your Google Maps API key
const GOOGLE_MAPS_API_KEY = 'AIzaSyBbsRLp5lajZYRkCLfAMuii0enZ6j2H55U';

const ExploreScreen: React.FC = () => {
  const markerPosition = {
    latitude: INITIAL_REGION.latitude,
    longitude: INITIAL_REGION.longitude,
  };

  if (Platform.OS === 'web') {
    return (
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{
            width: '100vw',
            height: '100vh',
          }}
          center={{
            lat: INITIAL_REGION.latitude,
            lng: INITIAL_REGION.longitude,
          }}
          zoom={12}
        >
          <WebMarker
            position={{
              lat: markerPosition.latitude,
              lng: markerPosition.longitude,
            }}
          />
        </GoogleMap>
      </LoadScript>
    );
  }

  return (
    <View style={styles.nativeMapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
      >
        <Marker coordinate={markerPosition} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  nativeMapContainer: {
    flex: 1,
  },
});

export default ExploreScreen;
