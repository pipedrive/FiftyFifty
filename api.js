const request = require('request-promise');

async function getUser(accessToken) {
	const requestOptions = {
		uri: 'https://api-proxy.pipedrive.com/users/me',
		headers: {
			'Authorization': `Bearer ${accessToken}`
		},
		json: true
	};
	const userInfo = await request(requestOptions);

	return userInfo;
}

async function getDeals(accessToken) {
	const requestOptions = {
		uri: 'https://api-proxy.pipedrive.com/deals',
		headers: {
			'Authorization': `Bearer ${accessToken}`
		},
		qs: { status: 'open' },
		json: true
	};
	const deals = await request(requestOptions);

	return deals;
}

async function updateDeal(id, outcome, accessToken) {
	const requestOptions = {
		uri: `https://api-proxy.pipedrive.com/deals/${id}`,
		method: 'PUT',
		headers: {
			'Authorization': `Bearer ${accessToken}`
		},
		json: {
			status: outcome
		}
	};

	await request(requestOptions);
}

module.exports = {
	getUser,
	getDeals,
	updateDeal
};