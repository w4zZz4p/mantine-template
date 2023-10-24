import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.APP_POCKETBASE_URL);

export { pb };
