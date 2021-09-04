import { verbList } from './verbGetter';

export function setSelected(verb: string, selected?: boolean): void {
	if (selected === true) {
		localStorage.setItem(verb, 'true');
	} else {
		localStorage.setItem(verb, 'false');
	}
}

export function getSelected(verb: string): boolean {
	const currentValue = localStorage.getItem(verb) as 'true' | 'false';
	const booleanValue = currentValue === 'true' ? true : false;

	return booleanValue;
}

export function loadArray(selectedOnly?: boolean): string[] | boolean[] {
	switch (selectedOnly) {
		case true:
			const selected: string[] = [];
			for (let i = 0; i < verbList.length; i++) {
				const verb = verbList[i];
				if (getSelected(verb) === true) {
					selected.push(verb);
				}
			}
			return selected;
		case false:
			const notSelected: string[] = [];
			for (let i = 0; i < verbList.length; i++) {
				const verb = verbList[i];
				if (getSelected(verb) === false) {
					notSelected.push(verb);
				}
			}
			return notSelected;
		default:
			const booleans: boolean[] = [];
			for (let i = 0; i < verbList.length; i++) {
				const verb = verbList[i];
				booleans.push(getSelected(verb));
			}
			return booleans;
	}
}
