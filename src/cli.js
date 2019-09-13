// usage represents the help guide
const usage = function() {
    var usageText = `
    A simple npm package which gives you the current time - lovely formatted.
  
    usage:  whatime
  `;
    console.log(usageText);
};

const whatime = require('./main');

function cli(args) {
    let options = args.splice(2);
    if (options.length != 0) usage() && ProcessingInstruction.exit(1);
    else whatime(options);
}

module.exports = cli;
