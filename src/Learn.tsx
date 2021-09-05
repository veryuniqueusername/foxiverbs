import { useState } from 'react';
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from 'react-icons/bs';
import speak from './speechSynthesis';
import { loadArray } from './storage';
import { getVariant } from './verbGetter';

export default function Learn() {
	const [muted, setMuted] = useState(
		localStorage.getItem('muted') === 'true' ? true : false
	);

	const selectedVerbs = loadArray(true);
	const table = [];

	function handleClick(verb: string) {
		if (!muted) speak(verb);
	}

	for (let i = 0; i < selectedVerbs.length; i++) {
		const verb = selectedVerbs[i];
		table.push(
			<tr onClick={() => handleClick(verb)}>
				<td />
				<td>{getVariant(verb, 'SWE')}</td>
				<td>{verb}</td>
				<td>{getVariant(verb, 'SP')}</td>
				<td>{getVariant(verb, 'PP')}</td>
			</tr>
		);
	}

	return (
		<div className="TableWrapper">
			<table className="SpeakingTable">
				<thead>
					<tr>
						<th style={{ width: '1ch' }}>
							<button
								onClick={() =>
									setMuted(() => {
										localStorage.setItem('muted', muted ? 'false' : 'true');
										return !muted;
									})
								}
								className="muteButton"
							>
								{muted ? <BsFillVolumeMuteFill /> : <BsFillVolumeUpFill />}
							</button>
						</th>
						<th>Svenska</th>
						<th>Infinitive</th>
						<th>Simple Past</th>
						<th>Past Participle</th>
					</tr>
				</thead>
				<tbody>{table}</tbody>
			</table>
		</div>
	);
}
