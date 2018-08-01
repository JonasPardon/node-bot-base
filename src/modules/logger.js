/**
 * Props to AnidiotsGuide for this,
 * find them at:
 * https://anidiots.guide/
 */

const chalk = require("chalk");
const moment = require("moment");

module.exports = async (client) => {

    /**
     * Log to the console with colors
     * 
     * @param {String} content 
     * @param {String} type 
     */
    client.log = (content, type = "log") => {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
        switch (type) {
          case "log": {
            return console.log(`${timestamp} ${chalk.bgBlue(type.toUpperCase())} ${content} `);
          }
          case "warn": {
            return console.log(`${timestamp} ${chalk.black.bgYellow(type.toUpperCase())} ${content} `);
          }
          case "error": {
            return console.log(`${timestamp} ${chalk.bgRed(type.toUpperCase())} ${content} `);
          }
          case "debug": {
            return console.log(`${timestamp} ${chalk.green(type.toUpperCase())} ${content} `);
          }
          case "cmd": {
            return console.log(`${timestamp} ${chalk.black.bgWhite(type.toUpperCase())} ${content}`);
          }
          case "ready": {
            return console.log(`${timestamp} ${chalk.black.bgGreen(type.toUpperCase())} ${content}`);
          }
          default: throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");
        }
      }; 
      
      client.error = (...args) => client.log(...args, "error");
      
      client.warn = (...args) => client.log(...args, "warn");
      
      client.debug = (...args) => client.log(...args, "debug");
      
      client.cmd = (...args) => client.log(...args, "cmd");
}

