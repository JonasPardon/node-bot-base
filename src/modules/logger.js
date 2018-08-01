/**
 * Props to AnidiotsGuide for this,
 * find them at:
 * https://anidiots.guide/
 */

const chalk = require("chalk");
const moment = require("moment");

module.exports = async (client) => {

    client.log = {};

    /**
     * Log to the console with colors
     * 
     * @param {String} content 
     * @param {String} type 
     */
    client.log.log = (content, type = "log") => {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
        switch (type) {
          case "log": {
            return console.log(`${timestamp} ${chalk.bgBlue(' ' + type.toUpperCase() + ' ')} ${chalk.blue(content)} `);
          }
          case "warn": {
            return console.log(`${timestamp} ${chalk.black.bgYellow(' ' + type.toUpperCase() + ' ')} ${chalk.yellow(content)} `);
          }
          case "error": {
            return console.log(`${timestamp} ${chalk.bgRed(' ' + type.toUpperCase() + ' ')} ${chalk.red(content)} `);
          }
          case "debug": {
            return console.log(`${timestamp} ${chalk.green(' ' + type.toUpperCase() + ' ')} ${content} `);
          }
          case "cmd": {
            return console.log(`${timestamp} ${chalk.black.bgWhite(' ' + type.toUpperCase() + ' ')} ${chalk.white(content)}`);
          }
          case "ready": {
            return console.log(`${timestamp} ${chalk.black.bgGreen(' ' + type.toUpperCase() + ' ')} ${chalk.green(content)}`);
          }
          default: throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");
        }
      }; 
      
      client.log.error = (...args) => client.log(...args, "error");
      
      client.log.warn = (...args) => client.log(...args, "warn");
      
      client.log.debug = (...args) => client.log(...args, "debug");
      
      client.log.cmd = (...args) => client.log(...args, "cmd");
}

