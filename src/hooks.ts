import type { Handle } from '@sveltejs/kit';
import { MongoClient } from 'mongodb';

export const handle: Handle = async ({ event, resolve }) => {
	const client = await MongoClient.connect(
		`mongodb://root:${<string>process.env['MONGO_INITDB_ROOT_PASSWORD']}@db_volume:27017`
	);
	return await resolve(event);
};
