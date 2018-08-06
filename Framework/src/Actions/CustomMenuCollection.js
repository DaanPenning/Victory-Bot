// REQUIRES
const Discord = require('discord.js');
const Variables = require('../Variables/Variables.js');

// FUNCTIONALITY
function CreateMenuCollection(message, args, MenuCollection)
{
  return message.channel.send(MenuCollection.getPage(args))
}

// EXPORTS
module.exports = CreateMenuCollection;
