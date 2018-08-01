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
            client.log(` 👌 Loaded command: ${command.help.name}.`);
        } catch (e) {
            client.error(`Unable to load command ${commandName}: ${e}`);
        }
    }

    /**
     * Loads in the events and binds them to the 
     * client's event listener
     * 
     * @param {String} eventName 
     */
    client.loadEvent = (eventName) => {
        try{
            eventName = eventName.split(".")[0];
            const event = require(`../events/${eventName}`);
            client.on(eventName, event.bind(null, client));
            client.log(` 👌 Loaded event: ${eventName}.`);
        }catch(e){
            client.error(`Unable to load event ${eventName}: ${e}`);
        }
    }
}