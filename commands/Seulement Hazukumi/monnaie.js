const monnaie = require('../../monnaie.json');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports.run = async (Isuna, message, args) => {
  const addRemove = args[0];
  const montant1 = args[1];
  const montant = await montant1();
  parseInt(montant1);
  const userPing = message.mentions.users.first();

  if (!monnaie[userPing.id]) {
    monnaie[userPing.id] = {
      cash: 0
    };
  }

  if (!message.guild.id === '732692494621605909') return message.reply("Tu n'est pas sur le bon serveur pour utiliser cette commande.");
  if (!message.member.roles.has === "monnaie manajer") return message.channel.reply("-_- tu essaie d'utiliser cette commande même so ti n'a pas la permission. T'est trop débile.");
  if (!message.mentions) return message.reply('tu doit mentionner quelqu\'un');
  if (addRemove === "set") {
    if (!message.member.roles.cache.get('738071075241590816')) return message.reply("Tu n'a pas les permissions d'utiliser cette commande")
    monnaie[userPing.id].cash = montant;

    const addEmbed = new MessageEmbed()
      .setAuthor(`${userPing.username} (${userPing.id})`, userPing.avatarURL())
      .setColor("#39831f")
      .setDescription(`${userPing.username} a maintenant ${monnaie[userPing.id].cash}`)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`ajouté par ${message.author.username}`);

    message.reply(addEmbed);
  }
  fs.writeFile('./monnaie.json', JSON.stringify(monnaie), err => {
    if (err) console.log(err);
  });
};
module.exports.help = {
  name: 'monnaie',
  description: 'permet de set la monnaie d\'un utilisateur, reservée aux admins',
  aliases: ['monnaie'],
  categorie: 'seulement hazukumi',
  cooldown: 5,
  permission: true,
  args: true
};