const playBtn = document.getElementById('playBtn')
const pauseBtn = document.getElementById('pauseBtn')
const stopBtn = document.getElementById('stopBtn')
const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')
let currentCharacter

playBtn.addEventListener('click', () => {
    playText(textInput.value)
})
pauseBtn.addEventListener('click', pauseText)
stopBtn.addEventListener('click', stopText)
speedInput.addEventListener('input', () => {
    stopText()
    playText(utterance.text.substring(currentCharacter))
})

const utterance = new SpeechSynthesisUtterance()
utterance.addEventListener('end', () => {
    textInput.disabled = false
})
utterance.addEventListener('boundary', e => {
    currentCharacter = e.charIndex
})

function playText(text) {
    if(speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    }
    if(speechSynthesis.speaking) return
    utterance.text = text
    utterance.lang = 'es-ES'
    utterance.rate = speedInput.value || 1
    textInput.disabled = true
    speechSynthesis.speak(utterance)
}

function pauseText() {
    if (speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() {
    speechSynthesis.resume()
    speechSynthesis.cancel()
}