const launches = new Map();

const launch = {
	flightNumber: 100,
	mission: 'Kepler Exploration X',
	rocket: 'Explorer IS1',
	launchDate: new Date('December 27, 2030'),
	destination: 'Kepler-442 b', 
	customers: ['ZTM', 'SpaceX', 'NASA' ],
	upcoming: true,
	success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
	return Array.from(launches.values());
}

function addNewLaunch(launch) {
	latestFlightNumber++;
	launches.set(
		latestFlightNumber,
		Object.assign(launch, {
			upcoming: true,
			success: true,
			customers: ['ZTM', 'SpaceX', 'NASA' ],
			flightNumber: latestFlightNumber,
		})
	);
}
module.exports = {
	getAllLaunches,
	addNewLaunch,
}