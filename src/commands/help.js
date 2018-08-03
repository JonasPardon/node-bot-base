exports.run = async (client, msg, args) => { // eslint-disable-line no-unused-vars

    let body = `*Prefix*: \`${client.config.prefix}\`\n\n`;
    let embed = client.embed();

    // Get the user's permission level so we know which
    // commands we can show in the help list
    const userPermLevel = client.permLevel(msg);

    // Loop over all the commands and check if the user can 
    // use these commands. If they can, add them to the 
    // list, otherwise ignore them
    Object.keys(client.commands).forEach(cmd => {
        if(userPermLevel < client.commands[cmd].help.permLevel) return;
        body += `__**${client.commands[cmd].help.name}**__\n*${client.commands[cmd].help.description}*\n\n`;
    });

    embed.setTitle('Help')
        .setDescription(body);
    
    // The message is an embed, this can sometimes give issues
    // with the bot's permissions in a server, so make sure to
    // catch it
    msg.channel.send(embed)
        .catch(e => {
            msg.channel.send(`The following went wrong when calling the help command:\n${e}`);
        });
}

exports.help = {
    name: 'help',
    description: 'Display the help commands for your permission level',
    permLevel: 0
}