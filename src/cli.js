const program = require('commander');
const pjson = require('../package.json');

const whatime = require('./main');

function cli(argv) {
    program.version(pjson.version).description(pjson.description);

    program.parse(argv);

    whatime();
}

module.exports = cli;
