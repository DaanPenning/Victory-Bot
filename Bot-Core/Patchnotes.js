const Discord = require('discord.js');
const Framework = require('../Framework/vbot.js');

const e = new Discord.RichEmbed();
e.setTitle(`Patchnotes version ${Framework.Variables.GeneralInfo.version}`)
e.setColor(Framework.Variables.Colors.main);
e.setAuthor("Victory Bot");
e.setFooter("Victory Bot developed by Dadema");

e.addField("Command messages automatically get removed", "Less clutter")
e.addField("Added /invite", "Add the bot to your own server");

module.exports = e;
