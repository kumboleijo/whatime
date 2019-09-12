const moment = require('moment')
const Jetty = require('jetty')
const chalk = require('chalk');
const cliCursor = require('cli-cursor')

cliCursor.hide()

let jetty = new Jetty(process.stdout)
jetty.clear()

function whatime(options) {
    setInterval(() => {
        let now = moment().format("HH:mm:ss")
        jetty.clear()
        jetty.moveTo([0,0])
        jetty.text("----------")
        jetty.moveTo([1,0])
        jetty.text("|" + chalk.white.bgMagenta(now) + "|")
        jetty.moveTo([2,0])
        jetty.text("----------")
    }, 900);
}

module.exports = whatime