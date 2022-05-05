import type { Handle } from '@sveltejs/kit';
import { MongoClient } from 'mongodb';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('Why am I running???');
	const client = await MongoClient.connect(
		`mongodb://root:dontputpasswordsintoyourcode@db_volume:27017`
	);
	return await resolve(event);
};
