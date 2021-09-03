import verbConjugations = require('english-verbs-irregular/dist/verbs.json');
import verbList = require('./verbList.json');

const json = {};
for (let i = 0; i < verbList.length; i++) {
	let sp = '';
	let pp = '';
	sp += verbConjugations[verbList[i]['eng']][0][0];
	pp += verbConjugations[verbList[i]['eng']][0][1];
	if (verbConjugations[verbList[i]['eng']][1]) {
		if (sp !== verbConjugations[verbList[i]['eng']][1][0])
			sp += ` / ${verbConjugations[verbList[i]['eng']][1][0]}`;
		if (pp !== verbConjugations[verbList[i]['eng']][1][1]) {
			pp += ` / ${verbConjugations[verbList[i]['eng']][1][1]}`;
		}
	}
	json[`${verbList[i]['eng']}`] = [sp, pp, verbList[i]['swe']];
}
console.log(JSON.stringify(json));
