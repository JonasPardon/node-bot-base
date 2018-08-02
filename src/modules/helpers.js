module.exports = async client => {

    /**
     * Loads in the commands and puts them in the commands array
     * 
     * @param {String} commandName 
     */
    client.loadCommand = (commandName) => {
        try {
            const command = require(`../commands/${commandName}`);
            client.commands[commandName.substring(0, commandName.length - 3)] = command;
            client.log.log(` 👌 Loaded command: ${command.help.name}.`);
        } catch (e) {
            client.log.error(`Unable to load command ${commandName}: ${e}`);
        }
    }

    /**
     * Loads in the events and binds them to the 
     * client's event listener
     * 
     * @param {String} eventName 
     */
    client.loadEvent = (eventName) => {
        try {
            eventName = eventName.split(".")[0];
            const event = require(`../events/${eventName}`);
            client.on(eventName, event.bind(null, client));
            client.log.log(` 👌 Loaded event: ${eventName}.`);
        } catch (e) {
            client.log.error(`Unable to load event ${eventName}: ${e}`);
        }
    }

    /**
     * Clean the passed text, this takes out @everyone
     * pings and the token, so it can't be leaked accidentally
     * 
     * @param {String} text 
     */
    client.clean = async (text) => {
        if (text && text.constructor.name == "Promise")
            text = await text;
        if (typeof evaled !== "string")
            text = require("util").inspect(text, {
                depth: 1
            });

        text = text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203))
            .replace(client.token, "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");

        return text;
    };

    /**
     * Calculates and returns the user's permission level
     * 
     * @param {String} message 
     */
    client.permLevel = msg => {
        let permLevel = 0;

        const permOrder = client.config.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);

        while (permOrder.length) {
            const currentLevel = permOrder.shift();
            if (msg.guild && currentLevel.guildOnly) continue;
            if (currentLevel.check(msg)) {
                permLevel = currentLevel.level;
                break;
            }
        }
        return permLevel;
    };
}