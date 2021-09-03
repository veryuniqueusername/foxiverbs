import verbs = require('./verbs.json');

export const verbList: string[] = [];

for (const key in verbs) {
	verbList.push(key);
}

export function getVariant(verb: string, type: string): string {
	switch (type) {
		case 'SP':
			return verbs[verb][0];
		case 'PP':
			return verbs[verb][1];
		case 'SWE':
			return verbs[verb][2];
	}
}
