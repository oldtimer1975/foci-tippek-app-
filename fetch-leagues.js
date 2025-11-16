const http = require('https');

const options = {
	method: 'GET',
	hostname: 'free-api-live-football-data.p.rapidapi.com',
	path: '/football-leagues', // <-- EZT a Playgroundban látott VÉGPONTRA CSERÉLD!
	headers: {
		'x-rapidapi-key': '2029a93e59msh0be1fa66c927d3fp19a59ajsnaedce4f83f49',
		'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.on('error', function(e) {
	console.error(`HIBA: ${e.message}`);
});

req.end();
