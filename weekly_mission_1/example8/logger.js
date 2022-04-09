/*
export default nos permite exportar esta clase e importarla

import MyLogger from './logger.js
'*/

export default class logger {
    constructor (name) {
        this.name = name
    }
    log (message) {
        console.log(`[${this.name}] ${message}`)
    }
}