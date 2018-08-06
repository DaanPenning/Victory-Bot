// REQUIRES
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const search = require('youtube-search');
const Variables = require('../Variables/Variables.js');

// DEFINE
var search_results_max = 1;
var name;
var opts = {
	maxResults: search_results_max,
	key: 'AIzaSyCnZIXX-hBB_Mu7OlAlGIC4yT8ehgHwgrY'
};
var servers = {};
var nowPlaying = "";


// FUNCTIONALITY
function playMusic(message, link, search_query, mode)
{
	if(!message.member.voiceChannel) {
		return message.channel.send(Variables.Responses.NotInAVoiceChannel);
	}


	if(!servers[message.guild.id])
	{
		servers[message.guild.id] = {
			queue: [],
			names: []
		};

	}

	var server = servers[message.guild.id];

  if(mode == "LINK")
  {
    search(link, opts, function(err, info) {
  		name = info[0].title;
  		server.names.push(name);
  	});
  	server.queue.push(link);

  }
  else if(mode == "SEARCH")
	{
    search(search_query, opts, function(err, results) {
			if(err) return consolelog(err);
			  server.queue.push(results[0].link);
			  name = results[0].title;
			  server.names.push(name);
		});

	}

	message.channel.send(Variables.Responses.AddedToQueue);


	if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
		if(name == null || name == "")
		{
			console.log("A requested video had no name!, returning NOT DEFINED");
      name = "_Not Defined_";
		}



		play(connection, message);


	});
}

function play(connection, message)
{
	try
	{
		var server = servers[message.guild.id];

		server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
		nowPlaying = server.names[0];
		console.log(nowPlaying);
		message.channel.send("Now playing ``" + server.names[0] + "`` in voichannel ``" + message.member.voiceChannel.name + "``");

		server.queue.shift()
		server.names.shift();
		server.dispatcher.on("end", function() {
	    if(server.queue[0]) play(connection, message);
	    else
	    {
		    message.channel.send("Disconnected from the voicechannel");
		    connection.disconnect();
	    }
		});
	}
	catch(err)
	{
			message.channel.send(Variables.Responses.ErrorOccured);
      console.log(err);
	}

}

function skip(message)
{
	if(!servers[message.guild.id])
	{
		return message.channel.send(Variables.Responses.NoContentInQueueToSkip);
	}

	var server = servers[message.guild.id];
	message.channel.send(Variables.Responses.Skipped);
	if(server.dispatcher) server.dispatcher.end();
}

function clear(message)
{
	var server = servers[message.guild.id];
	server.queue = [];
}

function stop(message){
	var server = servers[message.guild.id];

	if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
}

function stats(message){
	if(!servers[message.guild.id]) return message.channel.send("You are not playing any music at the moment");
	var server = servers[message.guild.id];
	const embed = new Discord.RichEmbed()
		.setTitle("Music Bot")
		.setColor(Variables.Colors.blue)
		.addField("Now playing", "``" + nowPlaying + "``")
		.addField("Total queue lenght", "``" + server.queue.length + "``");
	message.channel.send(embed);
}


// Exports
module.exports.Play = playMusic;
module.exports.Stop = stop;
module.exports.Skip = skip;
module.exports.Clear = clear;
module.exports.Stats = stats;
