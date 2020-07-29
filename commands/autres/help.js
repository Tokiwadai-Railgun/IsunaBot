/* eslint-disable no-negated-condition */
const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const categoriesList = readdirSync('./commands');

module.exports.run = (Isuna, message, args) => {
  if (!args.length) {
    const help = new MessageEmbed()
      .setColor("#f500ff")
      .setTitle("Liste de toutes les sous-catégories disponnibles et leurs commandes.")
      .addField("Liste des comamndes", `Une liste de toutes les sous-catégories disponnibles.\nPour plus d'info sur une commande tape \`\`isu help <Nom de la commande>\`\``);
    
    for (const categorie of categoriesList) {
      help.addField(
        `${categorie}`,
        `\`\`${Isuna.commands.filter(cat => cat.help.categorie === categorie.toLowerCase()).map(cmd => cmd.help.name).join("``, ``")}\`\``
      );
    }
      
    message.channel.send(help);
  } else {
    const command = Isuna.commands.get(args[0]) || Isuna.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));

    const helpCommande = new MessageEmbed()
      .setColor("#f500ff")
      .setTitle(`\`${command.help.name}\``)
      .addField("Description de la commande :", `${command.help.description} (cooldown: ${command.help.cooldown} secs)`)
      .addField("Utilisation : ", command.help.usage ? `isu ${command.help.name} ${command.help.usage}` : `${command.help.name}`, true);

    if (command.help.aliases.length > 1) helpCommande.addField("Alias : ", `${command.help.aliases.join(', ')}`);
    
    message.channel.send(helpCommande);
  }
};

module.exports.help = {
  name: 'help',
  description: 'affiche la liste de toutes les commandes ou des informations sur une seul',
  categorie: 'autres',
  aliases: ['help'],
  permission: false,
  cooldown: 5,
  args: false
};