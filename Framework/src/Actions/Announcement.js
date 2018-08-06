// REQUIRES
const Discord = require('discord.js');

// FUNCTIONALITY

function ServerAnnouncement(message, announcement)
{
  const Embed = new Discord.RichEmbed()
    .setTitle("Announcement!")
    .setColor("#b71c1c")
    .setDescription(announcement);
  message.channel.send("@everyone");
  message.channel.send(Embed);
  clear(message);
}

async function clear(message) {
	message.delete();
	const fetched = await message.channel.fetchMessages();
	message.channel.bulkDelete(fetched);
}

module.exports = ServerAnnouncement;
