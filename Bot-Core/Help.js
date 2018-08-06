const Discord = require('discord.js');
const Framework = require('../Framework/vbot.js');

var HelpMenu = new Framework.Objects.MenuCollection();

const Page01 = new Discord.RichEmbed()
  .setDescription("**General**\nNext page: Music Bot")
  .addField('/info', 'Info about the server and the bot', inline=true)
  .addField('/help [page]', 'You can find all the commands in here', inline=true);

const Page02 = new Discord.RichEmbed()
  .setDescription("**Music Bot**\nNext page: Moderator")
  .addField("/play [Link] or /play [Name]", "Joins your voicechannel and starts playing a youtube video (sound only)", inline=true)
  .addField("/skip", "Skips the youtube video that is currently playing. If there are no videos left, the bot will disconnect", inline=true)
  .addField("/stop", "Stops the music bot entirely (and clears the queue)")
  .addField("/clear", "Clears the queue, but continues playing the current song")
  .addField("/musicstats", "Gives the song that is now playing and the total amount of songs in the queue");

const Page03 = new Discord.RichEmbed()
  .setDescription("**Moderator**")
  .addField("/ban [Mention of member] [Reason]", "Bans a user from the server. REQUIRES ADMINISTRATOR RIGHTS OR ROLES")
  .addField("/kick [Mention of member] [Reason]", "Kicks a user from the server. REQUIRES ADMINISTRATOR RIGHTS OR ROLES")
  .addField("/botban [Mention of member]", "Disalows a user from using the bot. REQUIRES A HIGHER ROLE (Leni Bot Manager, Moderator or Owner)");
// SETTINGS
HelpMenu.title = `Help Menu`;
HelpMenu.description = `Welcome to the Help menu! Here you can find all the commands usable with the bot.`;
HelpMenu.color = Framework.Variables.Colors.orange;
HelpMenu.footer = `Discord bot by Dadema`;
HelpMenu.addPage(Page01);
HelpMenu.addPage(Page02);
HelpMenu.addPage(Page03);

module.exports = HelpMenu;
