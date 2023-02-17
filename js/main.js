function speak(text){
    const message = new SpeechSynthesisUtterance;
    message.lang = 'ru-RU';
    message.text = text;
    window.speechSynthesis.speak(message);
}

const btnSpeak = document.querySelector('#speak');
const txtMessage = document.querySelector('#message');

btnSpeak.addEventListener('click', () => {
    speak(txtMessage.value);
})