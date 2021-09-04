import { useState } from 'react';
import { verbList, getVariant } from './verbGetter';

function TableRow({ i, verb }: { i: number; verb: string }) {
	const [selected, setSelected] = useState(false);

	function click() {
		if (!selected) {
			setSelected(true);
		} else {
			setSelected(false);
		}
	}

	return (
		<tr onClick={click} className={selected ? 'selected' : null}>
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

	return (
		<table className="Table">
			<thead>
				<tr>
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
