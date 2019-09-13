const moment = require('moment');
const Jetty = require('jetty');
const chalk = require('chalk');
const cliCursor = require('cli-cursor');

cliCursor.hide();

let jetty = new Jetty(process.stdout);
jetty.clear();

function whatime() {
    setInterval(() => {
        let now = moment().format('HH:mm:ss');
        jetty.clear();
        jetty.moveTo([0, 0]);
        jetty.text(chalk.white('----------'));
        jetty.moveTo([1, 0]);
        jetty.text(chalk.white('|') + chalk.green.bgBlack(now) + chalk.white('|'));
        jetty.moveTo([2, 0]);
        jetty.text(chalk.white('----------'));
    }, 900);
}

module.exports = whatime;
