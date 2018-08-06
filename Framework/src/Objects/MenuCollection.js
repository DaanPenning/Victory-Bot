const Discord = require('discord.js');
const Variables = require('../Variables/Variables.js');

// MENU COLLECTION CLASS


class MenuCollection
{
  // SET THE VARIABLES OF THE COLLECTION
  constructor()
  {
    this.pages = [];
    this.currentPage = 1;
    this.title = "Menu Collection";
    this.color = "#000000";
    this.description = "Default Menu Collection item, can be send with the 'CustomMenuCollection' action";
    this.footer = "Default Footer"
    this.invalidPageMessage = "_*Sorry, that page doesn't exist*_";
  }
  addPage(embed)
  {
    if(embed.title == null || embed.title == "") embed.setTitle(this.title);
    if(embed.color == null || embed.color == "") embed.setColor(this.color);
    if(embed.description == null || embed.description == "") embed.setDescription(this.description);
    if(embed.footer == null || embed.footer == "") embed.setFooter(this.footer);
    this.pages.push(embed);
  }
  getPage(page)
  {
    // CONDITIONS
    if(!page || page == "") page = 1;
    if(page > this.pages.length || page < 1) return this.invalidPageMessage;
    if(typeof page === 'float') return this.invalidPageMessage;

    // SET VARIABLES
    this.currentPage = page;

    // RETURN
    return this.pages[page - 1];
  }
}

// EXPORTS
module.exports = MenuCollection;
