const xp = require('../../exp.json');
const monnaie = require("../../monnaie.json");
const { MessageEmbed } = require('discord.js');

module.exports.run = (Isuna, message) => {
  // XP et LVL
  const xpnow = xp[message.author.id].xp;
  const lvlNow = xp[message.author.id].niveau;
  const prochainlvlUp = lvlNow * 300;
  const xpNeededForLevelUp = prochainlvlUp - xpnow;

  if (!monnaie[message.author.id]) {
    monnaie[message.author.id] = {
      cash: 0,
      random: 0
    };
  }
  // Monnaie
  const cashNow = monnaie[message.author.id].cash;

  const NiveauEmbed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('#1a5286')
    .addField('Niveau', lvlNow, true)
    .addField('Expérience', xpnow, true)
    .setFooter(`Tu a besoin de ${xpNeededForLevelUp} pour level up une prochaine fois`);

  const GoldEmbed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('#1a5286')
    .addField('💴 Monnaie', cashNow, true)
    .addField('Items', 'Non Disponnible pour le moment', true);

  message.channel.send(GoldEmbed);
  message.channel.send(NiveauEmbed);
};
module.exports.help = {
  name: 'information',
  description: "Donne les informations de l'utilisateur en rapport avec le serveur : monnaie, lvl et etc...",
  aliases: ['info', 'inf', 'inv', 'inventaire'],
  categorie: 'seulement hazukumi',
  cooldown: 5,
  permission: false,
  args: false
};