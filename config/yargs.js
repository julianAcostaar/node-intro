const { boolean } = require('yargs');

const yg = require('yargs')
            .option('b', {
                 alias: 'base',
                 type: 'number',
                 describe: ' Es la base que se usa para realizar las multiplicaciones'
            })    
            .option('l', {
                alias : 'list',
                type: boolean,
                default: false,
                describe: 'Lista por pantalla las multiplicaciones'
            })
            .check()
            .argv;