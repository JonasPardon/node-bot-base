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
            console.log(` 👌 Loaded command: ${command.help.name}.`);
        } catch (e) {
            console.log(`Unable to load command ${commandName}: ${e}`);
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
            const event = require(`./../events/${eventName}`);
            client.on(eventName, event.bind(null, client));
            console.log(` 👌 Loaded event: ${eventName}.`);
        }catch(e){
            console.log(`Unable to load event ${eventName}: ${e}`);
        }
    }

    /**
     * You can consider this an extended version
     * of the default console.log() function
     * 
     * @param {String} title
     * @param {String} color
     * @param {array} args 
     */
    client.log = (title, color, args = []) => {

    }
}