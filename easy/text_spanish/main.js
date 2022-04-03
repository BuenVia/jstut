const play = id('play')
const slow = id('slow')
const answerText = id('answerText')
const submitBtn = id('submitBtn')
const correct = id('correct')

play.addEventListener('click', () => {
    randomPhrase()
})
slow.addEventListener('click', () => {
    playText(phrase, 0.2)
})
submitBtn.addEventListener('click', () => {
    compareText(phrase)
})

function playText(text, speed) {
    const speech = new SpeechSynthesisUtterance()
    speech.text = text
    speech.lang = 'es-ES'
    speech.rate = speed
    speechSynthesis.speak(speech)
}

function randomPhrase() {
    const random = Math.floor(Math.random() * frases.length)
    playText(frases[random].text, 1)
}

function compareText(text) {
    if (answerText.value === text) {
        correct.innerText = 'Correct'
        correct.style.color = 'green'
    } else {
        correct.innerText = 'Incorrect'
        correct.style.color = 'red'
    }
}

function id(id) {
    return document.getElementById(id)
}

const phrase = 'Hola, me llamo Matt'

const frases = [
    {text: 'Hola, me llamo Matt'},
    {text: 'Encantado de conocerle'},
    {text: 'Cómo se llama'},
]