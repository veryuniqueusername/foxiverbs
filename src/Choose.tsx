import verbConjugations = require('english-verbs-irregular/dist/verbs.json');
import verbList = require('./verbList.json');

console.log(verbConjugations['bid']);

export default function Choose() {
	const table = [];

	for (let i = 0; i < verbList.length; i++) {
		table.push(
			<tr>
				<td>{verbList[i]['eng']}</td>
				<td>{verbConjugations[verbList[i]['eng']][0]}</td>
				<td>{verbConjugations[verbList[i]['eng']][0][1]}</td>
				<td>{verbList[i]['swe']}</td>
			</tr>
		);
	}

	return (
		<table className="Table">
			<thead>
				<tr>
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
