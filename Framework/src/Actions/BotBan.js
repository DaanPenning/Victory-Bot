const Discord = require("discord.js");



function BanUserFromBot(message, member, Users, roles)
{
  // Conditionals
  if(!message.member.roles.some(r=>roles.includes(r.name)) ) return context.reply(Variables.Responses.NoPermsission);

  if(!member) return message.channel.send(Variables.Responses.NotAValidMember);

  if(!Users[message.member.id]){
    Users[message.member.id] = {
      BannedFromBot: false
    }
  }

  // Ban the user
  Users[message.member.id].BannedFromBot = true;
}

module.exports = BanUserFromBot;
