const createRequestTypes = base => {
	const res = {};
	['REQUEST', 'SUCCESS', 'FAILED'].forEach(type => { res[type] = `${base}_${type}`; });
	return res;
}

export const GET_ASTEROID_DETAILS = createRequestTypes('GET_ASTEROID_DETAILS')

export const RANDOM_ASTEROID_DETAILS = createRequestTypes('RANDOM_ASTEROID_DETAILS')


