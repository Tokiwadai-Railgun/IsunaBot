const monnaie = require('../../monnaie.json');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports.run = (Isuna, message, args) => {
  const addRemove = args[0];
  const montant = args[1];
  const userPing = message.mentions.users.first();

  if (!monnaie[userPing.id]) {
    monnaie[userPing.id] = {
      cash: 0
    };
  }

  const cashActuelle = monnaie[userPing.id].cash;

  if (!message.guild.id === '732692494621605909') return message.reply("Tu n'est pas sur le bon serveur pour utiliser cette commande.");
  if (!addRemove === "add") return message.reply("tu doit spécifier add ou remove");
  if (!message.member.roles.has === "monnaie manajer") return message.channel.reply("-_- tu essaie d'utiliser cette commande même so ti n'a pas la permission. T'est trop débile.");

  if (addRemove === "set") {
    monnaie[userPing.id].cash = montant;

    const addEmbed = new MessageEmbed()
      .setAuthor(`${userPing.username} (${userPing.id})`, userPing.avatarURL())
      .setColor("#39831f")
      .setDescription(`${userPing.username} à bien reçus ${montant} de monnaie, il a maintenant ${monnaie[userPing.id].cash}`)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`ajouté par par ${message.author.username}`);

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