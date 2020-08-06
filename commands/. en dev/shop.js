const { MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");

module.exports.run = (Isuna, message) => {
  return message.channel.reply ('la commande n\'est pas disponnible pour le moment')
  const shopEmbed = new MessageEmbed()
    .setAuthor(message.setAuthor.id, message.author.avatarURL())
    .setColor("#39831f")
    .setDescription(`Voici les differents items disponnible dans le shop (non disponnible à l'achat pour le moment)`);

  for (const Item of itemList) {
    shopEmbed.addField(
    //  ``\`\`${Isuna.commands.filter(cat => cat.help.categorie === categorie.toLowerCase()).map(cmd => cmd.help.name).join("``, ``")}\`\```
    );
  }
};
module.exports.help = {
  name: 'shop',
  description: "affiche le shop du serveur",
  aliases: ['shop'],
  categorie: '. en dev',
  cooldown: 5,
  permission: false,
  args: false
};