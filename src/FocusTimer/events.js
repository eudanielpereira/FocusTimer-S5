import { controls } from "./elements.js"
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from "./timer.js"
import state from './state.js'


// cliques nos buttons
export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action]() != "function") {
            return
        }

        actions[action]()
    })
}

// escrever número no countdown
export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key) //testa se a tecla pressionada é um número. \d indica nº.

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time // para não ter número maior que 60 nos minutos

        state.minutes =  time
        state.seconds = 0 // para zerar os segundos quando um número for digitado nos segundos

        updateDisplay()
        el.minutes.removeAttribute('contenteditable') // "fechar a caixa de edição", para mudar os min terá que clicar de novo no relógio
    })
}