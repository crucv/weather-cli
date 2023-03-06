import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (message) => {
    console.log((` ${chalk.bgRed('Error')} ${message}`))
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(` Success ${message}`))
}

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan('Help')}
        Без параметров - вывод прогноза погоды 
        -s [City] для установки города
        -h для вывода помощи
        -t [Api_key] для сохранения токена`)
    )
}

export { printError, printSuccess, printHelp }