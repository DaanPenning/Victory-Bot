const Discord = require('discord.js')

var InviteLink = "https://discordapp.com/oauth2/authorize?client_id=415078827082121217&scope=bot&permissions=2146958591";

function GenerateInviteLink(message)
{
  var message_send = `Invite me to your server: ${InviteLink}`;
  message.channel.send(message_send);
}

module.exports = GenerateInviteLink;
