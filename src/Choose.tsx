import { BsFillVolumeUpFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { verbList, getVariant } from './verbGetter';
import { setSelected, saveArray, loadBooleans } from './storage';
import speak from './speechSynthesis';

function TableRow({
	i,
	verb,
	handleClick,
	selected,
}: {
	i: number;
	verb: string;
	handleClick: (i: number, boolean: boolean) => void;
	selected: boolean;
}) {
	const [selectedState, setSelectedState] = useState(selected);

	useEffect(() => {
		setSelectedState(selected);
	}, [selected]);

	function click() {
		if (!selectedState) {
			setSelectedState(true);
			handleClick(i, true);
			setSelected(verb, true);
		} else {
			setSelectedState(false);
			handleClick(i, false);
			setSelected(verb, false);
		}
	}

	return (
		<tr onClick={click} className={selectedState ? 'selected' : null}>
			<td className="speaker" onClick={() => speak(verb)}>
				<BsFillVolumeUpFill />
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
	const loaded = loadBooleans();
	const [states, setStates] = useState(loaded);

	function selectAll() {
		const newStates = [...states].fill(true);
		saveArray(newStates);
		setStates(newStates);
	}
	function deselectAll() {
		const newStates = [...states].fill(false);
		saveArray(newStates);
		setStates(newStates);
	}

	function handleClick(i: number, boolean: boolean) {
		const newStates = states;
		newStates[i] = boolean;
		setStates(newStates);
	}

	const table = [];
	for (let i = 0; i < verbList.length; i++) {
		const inf = verbList[i];
		table.push(
			<TableRow
				key={i}
				i={i}
				verb={inf}
				handleClick={handleClick}
				selected={states[i]}
			/>
		);
	}

	return (
		<div className="TableWrapper">
			<div className="Header">
				<p>Välj de verb som du vill lära in.</p>
				<button onClick={selectAll}>Markera alla</button>
				<button onClick={deselectAll}>Avmarkera alla</button>
			</div>
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
		</div>
	);
}
