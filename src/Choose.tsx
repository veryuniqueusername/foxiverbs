import { useState } from 'react';
import { verbList, getVariant } from './verbGetter';
import { setSelected, getSelected } from './storage';
import speak from './speechSynthesis';

// TODO: SELECT/DESELECT ALL

function TableRow({ i, verb }: { i: number; verb: string }) {
	const storedValue = getSelected(verb);
	const [selectedState, setSelectedState] = useState(storedValue);

	function click() {
		if (!selectedState) {
			setSelectedState(true);
			setSelected(verb, true);
		} else {
			setSelectedState(false);
			setSelected(verb, false);
		}
	}

	return (
		<tr onClick={click} className={selectedState ? 'selected' : null}>
			<td className="speaker" onClick={() => speak(verb)}>
				s
			</td>
			<td className={`tableNumber`}>{i + 1}</td>
			<td>{verb}</td>
			<td>{getVariant(verb, 'SP')}</td>
			<td>{getVariant(verb, 'PP')}</td>
			<td>{getVariant(verb, 'SWE')}</td>
		</tr>
	);
}

export default function Choose() {
	const table = [];

	for (let i = 0; i < verbList.length; i++) {
		const inf = verbList[i];
		table.push(<TableRow key={i} i={i} verb={inf} />);
	}

	speak('');

	return (
		<table className="Table">
			<thead>
				<tr>
					<th />
					<th />
					<th>Infinitive</th>
					<th>Simple Past</th>
					<th>Past Participle</th>
					<th>Svenska</th>
				</tr>
			</thead>
			<tbody>{table}</tbody>
		</table>
	);
}
