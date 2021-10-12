import { useEffect, useState } from 'react';
import './App.css';
// import CustomMap from './Map2';

var options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0,
};

function App() {
	const [userLocation, setUserLocation] = useState('');
	const success = (pos) => {
		let crd = pos.coords;

		console.log(`
			Your current position is: 
			Latitude : ${crd.latitude}
			Longitude: ${crd.longitude}
			More or less ${crd.accuracy} meters.
		`);
		setUserLocation({
			Latitude: crd.latitude,
			Longitude: crd.longitude,
			accuracy: `More or less ${crd.accuracy} meters.`,
		});
	};

	function errors(error) {
		setUserLocation(`ERROR(${error.code}): ${error.message}`);
		switch (error) {
			case error.PERMISSION_DENIED:
				alert('Please grant Delivast access to determine your location');
				break;
			case error.POSITION_UNAVAILABLE:
				alert('Location information is unavailable');
				break;
			case error.TIMEOUT:
				alert('Location information is unavailable');
				break;
			default:
				alert('Unable to determine location');
		}
	}

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, errors, options);
			// navigator.permissions
			// 	?.query({ name: 'geolocation' })
			// 	.then(function (result) {
			// 		if (result.state === 'granted') {
			// 			console.log(result.state);
			// 			navigator.geolocation.getCurrentPosition(success);
			// 		} else if (result.state === 'prompt') {
			// 			navigator.geolocation.getCurrentPosition(success, errors, options);
			// 		} else if (result.state === 'denied') {
			// 		}
			// 		result.onchange = function () {
			// 			console.log(result.state);
			// 		};
			// 	});
		} else {
			alert('Sorry Not available!');
		}
	}, []);

	return (
		<div className='App'>
			<h1>hello</h1>
			{/* <CustomMap /> */}
			<p>User's geolocation</p>
			<p>{JSON.stringify(userLocation)}</p>
		</div>
	);
}

export default App;
