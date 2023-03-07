#!/user/bin/env node

import { printHelp, printError, printSuccess } from './services/log.service.js'
import { getArgs } from './helpers/args.js'
import { saveKeyValue, DICTIONARY } from './services/storage.service.js'
import { getWeather } from './services/api.service.js'

const saveToken = async (token) => {
    if (!token.length) {
        printError('No token specified')
        return
    }
    
    try {
        await saveKeyValue(DICTIONARY.token, token)
        printSuccess('token saved')
    } catch (Error) {
        printError(Error.message)
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        printHelp()
    }

    if (args.s) {
        //save city
    }

    if (args.t) {
        return saveToken(args.t)
    }

    getWeather('Lipetsk')
}

initCLI()