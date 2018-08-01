const moment = require('moment');

module.exports = async (client, msg) => {

    //  If in dev mode, check if sender of the message is a bot owner
    //  If not a bot owner, return
    if(client.config.dev === true){
        if(client.config.owner.indexOf(msg.author.id) < 0) return;
    }

    //  Ignore if not a command or if the author is a bot
    if(msg.author.bot) return;
    if(!msg.content.toLowerCase().startsWith(client.config.prefix)) return;

    //  Get rid of the prefix and extract the arguments
    const args = msg.content.substring(client.config.prefix.length, msg.content.length).split(' ');

    //  If the command doesn't exist, ignore it
    //  If it does, run the command
    if(!client.commands[args[0]]) return;
    client.commands[args[0]].run(client, msg, args);

    //  Log the called command
    client.log.cmd(`Guild: ${msg.guild.name} | Channel: #${msg.channel.name} | User: ${msg.author.tag} | Command: ${client.commands[args[0]].help.name}`);
}