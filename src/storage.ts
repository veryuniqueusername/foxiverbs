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

export function loadArray(selectedOnly: boolean): string[] {
	if (selectedOnly) {
		const selected: string[] = [];
		for (let i = 0; i < verbList.length; i++) {
			const verb = verbList[i];
			if (getSelected(verb) === true) {
				selected.push(verb);
			}
		}
		return selected;
	} else {
		const notSelected: string[] = [];
		for (let i = 0; i < verbList.length; i++) {
			const verb = verbList[i];
			if (getSelected(verb) === false) {
				notSelected.push(verb);
			}
		}
		return notSelected;
	}
}

export function loadBooleans(): boolean[] {
	const booleans: boolean[] = [];
	for (let i = 0; i < verbList.length; i++) {
		const verb = verbList[i];
		booleans.push(getSelected(verb));
	}
	return booleans;
}

export function saveArray(arr: boolean[]): void {
	for (let i = 0; i < verbList.length; i++) {
		const verb = verbList[i];
		setSelected(verb, arr[i]);
	}
}
