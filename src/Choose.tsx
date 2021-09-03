import { verbList, getVariant } from './verbGetter';

function click(e) {
	e.preventDefault();
	e.currentTarget;
}

export default function Choose() {
	const table = [];

	for (let i = 0; i < verbList.length; i++) {
		const inf = verbList[i];
		table.push(
			<tr key={i} onClick={click}>
				<td className="tableNumber">{i + 1}</td>
				<td>{inf}</td>
				<td>{getVariant(inf, 'SP')}</td>
				<td>{getVariant(inf, 'PP')}</td>
				<td>{getVariant(inf, 'SWE')}</td>
			</tr>
		);
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
