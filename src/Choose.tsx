import verbConjugations = require('english-verbs-irregular/dist/verbs.json');
import verbList = require('./verbList.json');

// TODO: CREATE OWN JSON OF CONJUGATIONS + TRANSLATIONS
// * ALSO CREATE FUNCTION TO READ

const json = {};
for (let i = 0; i < verbList.length; i++) {
	let sp = '';
	let pp = '';
	sp += verbConjugations[verbList[i]['eng']][0][0];
	pp += verbConjugations[verbList[i]['eng']][0][1];
	if (verbConjugations[verbList[i]['eng']][1][0]) {
		sp += ` / ${verbConjugations[verbList[i]['eng']][1][0]}`;
		pp += ` / ${verbConjugations[verbList[i]['eng']][1][1]}`;
	}

	json[`${verbList[i]['eng']}`] = [sp, pp, verbList[i]['swe']];
}
console.log(json);

export default function Choose() {
	const table = [];

	for (let i = 0; i < verbList.length; i++) {
		table.push(
			<tr key={i}>
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
