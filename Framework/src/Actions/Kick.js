// REQUIRES
const Discord = require('discord.js');
const v = require('../Variables/Variables.js');
const Variables = v.Responses;

// FUNCTIONALITY
async function KickUser(context, user, reason, roles)
{
  if(!context.member.roles.some(r=>roles.includes(r.name)) ) return context.reply(Variables.Responses.NoPermsission);
  let member = context.mentions.members.first();
    if(!member)
      return context.reply(Variables.Responses.NotAValidMember);
    if(!member.kickable)
      return context.reply(Variables.Responses.NotKickable);

    if(!reason) reason = Variables.Responses.NoReason;

    await member.kick(reason).catch(error => context.reply(Variables.Responses.BanFailed));

    context.reply(Variables.Responses.Banned);
}

module.exports = KickUser;
