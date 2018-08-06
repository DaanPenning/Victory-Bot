var vbot = require('./vbot.js');
const Discord = require('discord.js');

// SET VARIABLES

// CREATE A HELP MENU
var HelpMenu = new vbot.Objects.MenuCollection();
HelpMenu.title = `Help Menu -- Page ${HelpMenu.currentPage}`;
HelpMenu.addPage(new Discord.RichEmbed()
    .addField('/help', 'Brings up a help menu!')
    .addField('/exit', 'Exit the bot'));

vbot.on('start', function(Bot){
  vbot.isPlaying('/help');
});

vbot.on('command', function(cmd, args, context, client){
  switch (cmd) {
    case "help":
        vbot.Actions.Help(context, args, HelpMenu);
    break;

    case "SendAMessage":
      context.channel.send('Message Send!');
    break;

    case "reply":
      context.reply('Hi there!');
    break;

    case "custom":
      var CustomMenu = new vbot.Objects.MenuCollection();
      CustomMenu.title = "Dummy 'CustomMenuCollection'";
      CustomMenu.color = vbot.Variables.Colors.red;
      CustomMenu.description = "A test for the 'CustomMenuCollection, introduced in version 0.11'";
      CustomMenu.addPage(new Discord.RichEmbed().addField('This is Page 1!', 'For more info, go to the dev!').addField('This is a dummy field!', 'Discord.RichEmbed().addField("dummyField")').setTitle('@Override Menu Titel'));
      CustomMenu.addPage(new Discord.RichEmbed().addField('This is Page 2!', 'There is nothing more to see!'));
      vbot.Actions.CustomMenuCollection(context, args, CustomMenu);
    break;

    case "ban":
      var reason = args.join(" ").substr(args[0].length);
      vbot.Actions.Ban(context, args[0], reason, ["Developer"]);
    break;

    default:
      vbot.Actions.invalidCommand(context, "**That is not a valid command**");
  }
});

vbot.start('NDM3OTg5ODg2MDU0NjI5Mzc2.DcXpLA.aJIMn9XxAWmzeMzDiLM7qtoOoMI');
