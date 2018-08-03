module.exports = {

    // If true, commands can only be called by the bot owners
    dev: false,

    token: '',
    prefix: '!',

    // Array of user ID's
    owner: [
        ''
    ],
    admin: [
        ''
    ],
    support: [
        ''
    ],

    // The names of the admin and mod roles in your server
    // Not case sensitive
    adminRole: '',
    modRole: '',

    // Set to null to make the bot not say anything when the user doesn't have permission
    unauthorizedMessage: 'You don\'t have permission to use this command!',

    permLevels: [
        // Non-roled users
        {
            level: 0,
            name: 'User',
            check: () => true
        },

        {
            level: 2,
            name: 'Moderator',
            check: (message) => {
                try {
                    const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.client.config.modRole.toLowerCase());
                    if (modRole && message.member.roles.has(modRole.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 3,
            name: 'Administrator',
            check: (message) => {
                try {
                    const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.client.config.adminRole.toLowerCase());
                    return (adminRole && message.member.roles.has(adminRole.id));
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 4,
            name: 'Server Owner',
            check: (message) => message.channel.type === 'text' ? (message.guild.owner.user.id === message.author.id ? true : false) : false
        },

        // Bot support can execute commands on other guilds
        {
            level: 8,
            name: 'Bot Support',
            check: (message) => message.client.config.support.indexOf(message.author.id) > -1 ? true : false
        },

        // Bot support can also reboot the bot
        {
            level: 9,
            name: 'Bot Admin',
            check: (message) => message.client.config.admin.indexOf(message.author.id) > -1 ? true : false
        },

        // Bot owner has all the permissions
        {
            level: 10,
            name: 'Bot Owner',
            check: (message) => message.client.config.owner.indexOf(message.author.id) > -1 ? true : false
        }
    ]
}