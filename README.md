# Base bot for Discord
A barebones bot for [Discord](https://discordapp.com/) written in node.js that you can use as a base for your new bots.

Contributions are welcome, feel free to send in your pull requests.

Inspired by Anidiot's Guide's bot.

## Setup
1. Install Node.js 8.9.4 (LTS) or higher
2. Clone or download this repository
3. Make a copy of the file `config.example.js` in the same folder and name the copy `config.js`. Open the file and fill in the values.
   - You can also find more configurable options at the end of this page!
4. Install dependencies: `npm install`
5. Run the bot in dev mode (nodemon): `npm run dev`
6. Run the bot in normal mode: `npm start`

## Commands

##### User commands
`!help` Display the help command, this will only show the commands the current user has access to.  
`!ping` Play some ping pong with the bot.

##### Bot owner commands
`!eval` Evaluate arbitrary javascript code. This is very dangerous, so don't give anyone access to this.  
`!reboot` Gracefully exit the process. Will reboot if running under forever or pm2.

## Configuration options
These go in `config.js`. See also `config.example.js`.

|Option|Default|Description|
|------|-------|-----------|
|dev|false|When this is set to true, only bot owner(s) can use any commands|
|token|None|**Required!** The bot user's token|
|prefix|"!"|Prefix for bot commands|
|owner|None|Array of user ID's of people who own the bot. This gives access to the `!eval` command so handle with care|
|admin|None|Array of user ID's of people who are bot admin. These people will be able to reboot the bot|
|support|None|Array of user ID's of people who are bot support. These people can use the bot commands in other servers as well for troubleshooting purposes|
|adminRole|None|The name of the role of the admins on your server. Case insensitive|
|modRole|None|The name of the role of the mods on your server. Case insensitive|
|unauthorizedMessage|"You don't have permission to use this command!"|The message to send to a user when they try to use a command they are not authorized for. Set to `null` to not send any messages|
|permLevels|Array|The predefined permission levels, 0 being lowest and 10 being highest. Feel free to edit this as you wish|