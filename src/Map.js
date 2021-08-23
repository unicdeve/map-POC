import React from 'react';

import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/withScriptjs';

const Map = withScriptjs(
	withGoogleMap((props) => {
		return (
			<GoogleMap
				defaultZoom={8}
				defaultCenter={{
					lat: -34.397,
					lng: 150.644,
				}}
				// center={liveLocation ? liveLocation : destination}
				// heading={liveLocation ? liveLocation.heading : 90}
			>
				<Marker
					position={{
						lat: -34.397,
						lng: 150.644,
					}}
					title={'Destination'}
					icon={{
						scaledSize: { width: 43.5, height: 60 },
					}}
				/>
			</GoogleMap>
		);
	})
);

const CustomMap = () => {
	return (
		<div style={{ width: '500px', height: '500px' }}>
			<Map
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};

export default CustomMap;
