const Discord = require('discord.js');
const config = require('./config');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

/**
 * Let's make our own client that extends the base
 * Discord client.
 */

class Client extends Discord.Client {
    constructor() {
        super();

        this.config = config;

        this.embed = () => {
            return new Discord.RichEmbed()
                .setColor('#ffffff')
                .setTimestamp()
                .setFooter('');
        }

        // Let's get the essentials going
        this.init();
    }

    async init() {
        // Require all our modules
        require('./modules/helpers')(this);
        require('./modules/logger')(this);

        // Load all commands from the commands folder
        this.commands = [];
        const cmdFiles = await readdir("./src/commands/");
        this.log.log(`Loading a total of ${cmdFiles.length} commands...`);
        cmdFiles.forEach(f => {
            if (!f.endsWith(".js")) return;
            this.loadCommand(f);
        });

        // Load all events from the event folder and bind them to the client
        const evtFiles = await readdir("./src/events/");
        this.log.log(`Loading a total of ${evtFiles.length} events...`);
        evtFiles.forEach(f => {
            if (!f.endsWith(".js")) return;
            this.loadEvent(f);
        });

        // And finally, login!
        this.login(this.config.token);
    }
}

const client = new Client();