import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play() // para adicionar o audio
}

export function reset() { //Para fazer o reset da aplicação quando apertar o stop
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true) // permite editar a quantidade de minutos do cronometro
    el.minutes.focus() // cria a linha envolta dos minutos
    
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.play() //add audio
        return
    }

    sounds.bgAudio.pause()
}