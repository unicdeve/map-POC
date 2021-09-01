export const calulateDistance = (lat1, lon1, lat2, lon2) => {
	try {
		if (lat1 === lat2 && lon1 === lon2) {
			return 0;
		} else {
			let radlat1 = (Math.PI * lat1) / 180;
			let radlat2 = (Math.PI * lat2) / 180;
			let theta = lon1 - lon2;
			let radtheta = (Math.PI * theta) / 180;

			let distance = Math.acos(
				Math.sin(radlat1) * Math.sin(radlat2) +
					Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
			);
			distance = (distance * 180) / Math.PI;
			distance = distance * 60 * 1.1515;
			distance = distance * 1.609344;
			return distance;
		}
	} catch (ex) {
		return 0;
	}
};
