const moment = require('moment');

module.exports = async (client, msg) => {

    // If in dev mode, check if sender of the message is a bot owner
    // If not a bot owner, return
    if (client.config.dev === true) {
        if (client.config.owner.indexOf(msg.author.id) < 0) return;
    }

    // Ignore if not a command or if the author is a bot
    if (msg.author.bot) return;
    if (!msg.content.toLowerCase().startsWith(client.config.prefix)) return;

    // Get rid of the prefix and extract the arguments
    const args = msg.content.substring(client.config.prefix.length, msg.content.length).split(' ');
    const commandToCall = client.commands[args[0].toLowerCase()];
    args.shift();

    // Get the user's permission level
    const userPermLevel = client.permLevel(msg);

    // If the command doesn't exist, ignore it
    // If the user's permission level is too low, ignore it
    // If it does, run the command
    if (!commandToCall) return;
    if(commandToCall.help.permLevel > userPermLevel) return client.config.unauthorizedMessage ? msg.reply(client.config.unauthorizedMessage) : false;
    commandToCall.run(client, msg, args);

    // Log the called command
    client.log.log(`Guild: ${msg.guild.name} | Channel: #${msg.channel.name} | User: ${msg.author.tag} | Command: ${commandToCall.help.name}`, 'cmd');
}