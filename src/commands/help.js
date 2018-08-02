exports.run = async (client, msg, args, level) => { // eslint-disable-line no-unused-vars
    let body = `*Prefix*: \`${client.config.prefix}\`\n\n`;
    let embed = client.embed();

    const userPermLevel = client.permLevel(msg);

    // return console.log(typeof(client.commands));

    Object.keys(client.commands).forEach(cmd => {
        if(userPermLevel < client.commands[cmd].help.permLevel) return;
        // console.log(cmd);
        body += `__**${client.commands[cmd].help.name}**__\n*${client.commands[cmd].help.description}*\n\n`;
    });

    embed.setTitle('Help')
        .setDescription(body);
    
    msg.channel.send(embed)
        .catch(e => {
            msg.channel.send(`The following went wrong when calling the help command:\n${e}`);
        });
};

exports.help = {
    name: 'help',
    description: 'Display the help commands for your permission level',
    permLevel: 0
}