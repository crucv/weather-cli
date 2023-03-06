#!/user/bin/env node

import { printHelp } from './services/log.service.js'
import { getArgs } from './helpers/args.js'

const initCLI = () => {
    const args = getArgs(process.argv)
    console.log(args)

    if (args.h) {
        printHelp()
    }

    if (args.s) {
        //save city
    }

    if (args.t) {
        //save token
    }

    //show weather
}

initCLI()