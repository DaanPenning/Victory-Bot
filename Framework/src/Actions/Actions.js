// PACKAGES
const Discord = require('discord.js');

/**************** COMPONENTS *****************/

// EMBEDS AND COLLECTIONS
const Help = require('./Help.js');
const CustomMenuCollection = require('./CustomMenuCollection.js');
const Info = require('./Info.js');
const Invite = require('./InviteBot.js');

// MODERATOR

const Ban = require('./Ban.js');
const Kick = require('./Kick.js');
const BotBan = require('./BotBan.js');
const Announcement = require('./Announcement.js');

// EXPORTS
module.exports.Help = Help;
module.exports.CustomMenuCollection = CustomMenuCollection;
module.exports.Ban = Ban;
module.exports.Kick = Kick;
module.exports.Info = Info;
module.exports.BotBan = BotBan;
module.exports.Announcement = Announcement;
module.exports.InviteLink = Invite;
