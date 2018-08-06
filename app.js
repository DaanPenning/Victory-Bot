// REQUIRES / DEPENDENCIES
const Discord = require('discord.js');
const Framework = require('./Framework/vbot.js');

// BOT CORE
const Help = require('./Bot-Core/Help.js');
const patchnotes = require('./Bot-Core/Patchnotes.js');

Framework.on('start', function(Bot) {
  // PUT BOT EVENTS IN HERE!
  Bot.user.setUsername("INSERT USERNAME HERE");
  console.log(`The bot is online on ${Bot.guilds.size} server(s)!`);
});

Framework.on('command', function(cmd, args, message, Bot, Users){
  // CASE SYSTEM FOR THE BOT
  switch(cmd)
  {
    // The General Component
    case "help":
      Framework.Actions.Help(message, args, Help);
    break;

    case "info":
      Framework.Actions.Info(message, Bot);
    break;

    case "patchnotes":
      return message.channel.send(patchnotes);
    break;

    case "invite":
      Framework.Actions.InviteLink(message)
    break;
    // The Music Component
    case "play":
      if(args[0].startsWith("https://")) Framework.MusicBot.Play(message, args[0], null, "LINK", null);
      else {
        var allArgs = args.join(" ");
        Framework.MusicBot.Play(message, null, allArgs, "SEARCH", null);
      }
    break;

    case "playresult":
      Framework.MusicBot.Play(message, null, null, "SELECTION", args[0])
    break;

    case "skip":
      Framework.MusicBot.Skip(message);
    break;

    case "stop":
      Framework.MusicBot.Stop(message);
    break;

    case "clear":
      Framework.MusicBot.Clear(message);
    break;

    case "musicstats":
      Framework.MusicBot.Stats(message);
    break;
    // Search
    case "image":
      Framework.Image(message, args);
    break;

    case "youtube":
      Framework.MusicBot.Search(message, args);
    break;

    // The Server Event Component

    // Server Moderators
    case "ban":
      var reason = args.join(" ").substr(args[0].length);
      Framework.Actions.Ban(message, args[0], reason, ["Moderator", "Owner", "Developer / Beheerder"]);
    break;

    case "botban":
      Framework.Actions.BotBan(message, args[0], Users, ["Moderator", "Admin", "Owner", "Leni Bot Manager"]);
    break;

    case "announcement":
      Framework.Actions.Announcement(message, args.join(" "), ["Moderator", "Admin", "Owner", "Leni Bot Manager"]);
    break;

    default:
      message.channel.send(Framework.Variables.Responses.UnknownCommand);
    break;
  }
});

Framework.start('NDE1MDc4ODI3MDgyMTIxMjE3.DZgafA.e_jREEPWkHADrM897xoXk_ZiYZs');
