let voices = null;

voices = window.speechSynthesis.getVoices();
window.speechSynthesis.onvoiceschanged = () => {
	voices = window.speechSynthesis.getVoices();
};

export default function speak(text: string) {
	const speech = new SpeechSynthesisUtterance(text);

	speech.voice = voices.filter((voice) => {
		return voice.name.indexOf('UK English Female') > -1;
	})[0];

	window.speechSynthesis.speak(speech);
}
