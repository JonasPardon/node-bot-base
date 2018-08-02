exports.run = async (client, msg, args, level) => { // eslint-disable-line no-unused-vars
    const code = args.join(" ");
    try {
        const evaled = eval(code);
        const clean = await client.clean(evaled);
        msg.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
    } catch (err) {
        msg.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(err)}\n\`\`\``);
    }
};

exports.help = {
    name: 'eval',
    description: 'Execute artibrary javascript code (bot owner only)',
    permLevel: 10
}