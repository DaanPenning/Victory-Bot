// PACKAGES
const Discord = require('discord.js');
const EventEmitter = require('events');
const util = require('util');
// COMPONENTS
const Actions = require('./src/Actions/Actions.js');
const Variables = require('./src/Variables/Variables.js');
const Objects = require('./src/Objects/Objects.js');
const MusicBot = require('./src/Music/MusicBot.js')
const ServerEvents = require('./src/Events/ServerEvents.js');
const botconfig = require('./botsettings.json');
const ImageSearch = require('./src/Search/Image.js');

// VARIABLES
var state = "FULL";
var Users = {};
// OBJECTS
const Bot = new Discord.Client();
var framework = new EventEmitter();

// FUNCTIONALITY
Bot.on('ready', () => {
  framework.emit('start', Bot)
});

Bot.on('message', message => {
  message.guild.member(Bot.user).setNickname('NICKNAME HERE');
  // CONDITIONS
  if(message.author.bot) return;
	if(message.channel.type === "dm") return;

  if(!Users[message.member.id]){
    Users[message.member.id] = {
      BannedFromBot: false
    }
  }

  if(Users[message.member.id].BannedFromBot == true) return message.channel.send(Variables.Responses.BannedFromBot);


  // COMMAND HANDLER
  let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

  // COMMAND CONDITIONALS
  if(!cmd.startsWith(prefix)) return;
  cmd = cmd.substr(1);
  if(!args) args[0] = "no arguments"

  // DATA COMMAND
  console.log(`[${message.author.username}] Has send the following data:\nCommand: ${cmd}\nArguments: ${args}\nComplete message: ${message}\n`);


  // STATE
  if(state == "BLANK")
  {
    message.channel.send("Mode set to BLANK, no command handler active");
  }
  else if(state == "FULL")
  {
    framework.emit('command', cmd, args, message, Bot, Users);
  }

  try {
    clear(message)
  } catch (e) {
    console.log(e);
  }

});

// BOT FUNCTIONS
function login(token)
{
  Bot.login(token);
}

async function clear(message) {
	message.delete();
}

// EXPORT MODULES
module.exports = framework;
module.exports.Actions = Actions;
module.exports.Variables = Variables;
module.exports.Objects = Objects;
module.exports.MusicBot = MusicBot;
module.exports.Events = ServerEvents;
module.exports.Config = botconfig;
module.exports.Image = ImageSearch;

// EXPORT FUNCTIONALITY
module.exports.start = login;
module.exports.isPlaying = function(activity){
  Bot.user.setActivity(activity, {type: "PLAYING"});
}
module.exports.isWatching = function(activity){
  Bot.user.setActivity(activity, {type: "WATCHING"});
}
