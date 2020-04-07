const baseURL = 'http://localhost:3000/api/sightings/';

export default {
	// index
	getSightings() {
		return fetch(baseURL).then((res) => res.json());
	},

	//create
	postSighting(payload) {
		return fetch(baseURL, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: { 'Content-Type': 'application/json' },
		}).then((res) => res.json());
	},

	// delete

	deleteSighting(id) {
		return fetch(baseURL + id, {
			method: 'DELETE',
		});
	},
};
