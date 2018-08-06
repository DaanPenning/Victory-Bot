const Discord = require('discord.js');

function CreateInfoMessage(context, Bot)
{
  var msgMultiLine;
  msgMultiLine = `Victory Bot by Dadema`;
  msgMultiLine += `\nServer: ${context.guild.name}`;
  msgMultiLine += `\nOwner: ${context.guild.owner.displayName}`

  return context.channel.send(msgMultiLine);
}

module.exports = CreateInfoMessage;
