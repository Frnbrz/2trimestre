import { dev } from '$app/environment';
import type { PageLoad } from './$types';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

type User = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export const load: PageLoad = async () => {
	const r = await fetch('https://apimocha.com/frnbrz-mocha/usuarios');
	const users = (await r.json()) as User[]; 
	return {
		props: {
			users
		}
	};
};
