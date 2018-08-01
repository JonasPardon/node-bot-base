module.exports = async client => {
    client.log.log(`Servers: ${client.guilds.size} | Users: ${client.users.size} | Logged in as: ${client.user.tag}`, 'ready');
}