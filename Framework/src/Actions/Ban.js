// REQUIRES
const Discord = require('discord.js');
const Variables = require('../Variables/Variables.js');

// FUNCTIONALITY
async function BanUser(context, user, reason, roles)
{
  if(!context.member.roles.some(r=>roles.includes(r.name)) ) return context.reply(Variables.Responses.NoPermsission);
  let member = context.mentions.members.first();
    if(!member)
      return context.reply(Variables.Responses.NotAValidMember);
    if(!member.bannable)
      return context.reply(Variables.Responses.NotBannable);

    if(!reason) reason = Variables.Responses.NoReason;

    await member.ban(reason).catch(error => context.reply(Variables.Responses.BanFailed));

    context.reply(Variables.Responses.Banned);
}

module.exports = BanUser;
