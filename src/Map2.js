import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const options = {
	zoomControlOptions: {
		// position: google.maps.ControlPosition.RIGHT_CENTER,
	},
};

const containerStyle = {
	width: '400px',
	height: '400px',
};

const center = {
	lat: -34.397,
	lng: 150.644,
};

export default function CustomMap() {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU',
	});

	const renderMap = () => {
		return (
			<GoogleMap
				options={options}
				mapContainerStyle={containerStyle}
				zoom={8}
				center={center}
			>
				<Marker
					position={{
						lat: -34.397,
						lng: 150.644,
					}}
					title={'Destination'}
				/>
			</GoogleMap>
		);
	};

	if (loadError) {
		return <div>Map cannot be loaded right now, sorry.</div>;
	}

	return isLoaded ? renderMap() : <div>Loading</div>;
}
