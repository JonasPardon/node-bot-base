module.exports = async client => {
    client.log(`Servers - ${client.guilds.size} | Users - ${client.users.size} | Logged in as - ${client.user.tag}`, 'ready');
}