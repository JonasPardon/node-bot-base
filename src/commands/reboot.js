exports.run = async (client, msg, args) => { // eslint-disable-line no-unused-vars

    msg.channel.send('Rebooting, I\'ll be right back! 👌');

    process.exit(1);
}

exports.help = {
    name: 'reboot',
    description: 'Reboot the bot, if running under forever or pm2',
    permLevel: 9
}