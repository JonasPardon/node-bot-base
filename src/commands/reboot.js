exports.run = async (client, msg, args) => { // eslint-disable-line no-unused-vars
    process.exit(1);
}

exports.help = {
    name: 'reboot',
    description: 'Reboot the bot, if running under forever or pm2',
    permLevel: 9
}