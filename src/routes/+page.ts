import type { PageLoad } from './$types';

export const load: PageLoad = async ({
	url,
	fetch
}): Promise<{ name: string; age: number; count: number } | null> => {
	const name = url.searchParams.get('name');

	if (!name) {
		return null;
	}

	const response = await fetch(`https://api.agify.io/?name=${encodeURIComponent(name!)}`);

	const data = await response.json();

	return {
		name: data.name,
		age: data.age,
		count: data.count
	};
};
