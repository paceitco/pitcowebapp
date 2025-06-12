import React from 'react';
import { View, StyleSheet } from 'react-native';

const MapViewComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        frameBorder="0"
        style={styles.iframe}
        // src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=37.78825,-122.4324&zoom=14`}
        src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBbsRLp5lajZYRkCLfAMuii0enZ6j2H55U&center=37.78825,-122.4324&zoom=14`}
        allowFullScreen
      ></iframe>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iframe: {
    border: 0,
  } as any, // workaround for style type issues with iframe in RNW
});

export default MapViewComponent;
