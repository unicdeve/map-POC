import React from 'react';
import faker from 'faker';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function CustomMap() {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU',
	});

	const markers = [0, 0, 0, 0].map((_) => ({
		lat: parseFloat(faker.address.latitude()),
		lng: parseFloat(faker.address.longitude()),
	}));

	const renderMap = () => {
		return (
			<GoogleMap
				mapContainerStyle={{
					width: '400px',
					height: '400px',
				}}
				zoom={11}
				center={markers[0]}
			>
				{markers.map(({ lat, lng }, i) => (
					<Marker
						key={i}
						position={{
							lat,
							lng,
						}}
						title={`Marker ${i}`}
					/>
				))}
			</GoogleMap>
		);
	};

	if (loadError) {
		return <div>Map cannot be loaded right now, sorry.</div>;
	}

	return isLoaded ? renderMap() : <div>Loading</div>;
}
