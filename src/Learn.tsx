import speak from './speechSynthesis';
import { loadArray } from './storage';

export default function Learn() {
	const selectedVerbs = loadArray(true);

	speak('');

	return (
		<div>
			{selectedVerbs}
			<button onClick={() => speak('became')}>speak</button>
		</div>
	);
}
