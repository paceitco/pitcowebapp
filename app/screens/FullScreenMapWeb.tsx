// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const INITIAL_CENTER = {
//   lat: 37.78825,
//   lng: -122.4324,
// };

// const GOOGLE_MAPS_API_KEY = 'AIzaSyBbsRLp5lajZYRkCLfAMuii0enZ6j2H55U';

// const FullScreenMap: React.FC = () => {
//   return (
//     <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={{
//           width: '100vw',
//           height: '100vh',
//         }}
//         center={INITIAL_CENTER}
//         zoom={12}
//       >
//         <Marker position={INITIAL_CENTER} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default FullScreenMap;

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const FullScreenMapWeb: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBbsRLp5lajZYRkCLfAMuii0enZ6j2H55U">
      <GoogleMap
        mapContainerStyle={{ width: '100vw', height: '100vh' }}
        center={{ lat: 37.78825, lng: -122.4324 }}
        zoom={12}
      >
        <Marker position={{ lat: 37.78825, lng: -122.4324 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default FullScreenMapWeb;
