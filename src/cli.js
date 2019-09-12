// usage represents the help guide
const usage = function () {
    var usageText = `
    A simple npm package which gives you the current time - lovely formatted.
  
    usage:  wtii
  `
    console.log(usageText)
}

const wtii = require('./main')

function cli(args) {
    let options = args.splice(2)
    if (options.length != 0) usage() && ProcessingInstruction.exit(1)
    else wtii(options)
}

module.exports = cli