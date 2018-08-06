const Discord = require('discord.js');

function createHelpEmbed(message, args, MenuCollection)
{
  return message.channel.send(MenuCollection.getPage(args));
}

module.exports = createHelpEmbed;
