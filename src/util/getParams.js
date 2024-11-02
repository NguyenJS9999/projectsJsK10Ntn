export function getParams(key) {
	console.log('window.location.search ', window.location.search);
	const params = new URLSearchParams(window.location.search);
	console.log('getParams params: ', params);

	return params.get(key);
}
