import yargs, { options } from 'yargs';
import {hideBin}  from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv ))
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'M base'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'M table list'
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show notification table'
})
.option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name'
})
.option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
})
.check((argv, options) => {

    if (argv.b < 1) {
        throw 'Error: bsae must be a number';
    }

    return true;
})
.parseSync()