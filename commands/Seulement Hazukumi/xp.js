const xp = require('../../exp.json');
const { MessageEmbed } = require('discord.js');

module.exports.run = (Isuna, message) => {
  if (!xp[message.author.id]) {
    xp[message.author.id] = {
      exp: 0,
      niveau: 1
    };
  }

  const xpnow = xp[message.author.id].xp;
  const xpTotal = xp[message.author.id].xpTotal;
  const lvlNow = xp[message.author.id].niveau;
  const prochainlvlUp = lvlNow * 100;
  const xpNeededForLevelUp = prochainlvlUp - xpnow;

  const nivEmbed = new MessageEmbed()
    .setAuthor(message.author.name, message.author.avatarURL())
    .setColor('#1a5286')
    .addField('Niveau', lvlNow, true)
    .addField('Expérience', xpnow, true)
    .setFooter(`Tu a besoin de ${xpNeededForLevelUp} pour level up une prochaine fois`);

  message.channel.send(nivEmbed);
};
module.exports.help = {
  name: 'Seulement Hazukumi',
  description: 'donne le level de l\'utilisateur',
  aliases: ['lvl', 'niv', 'niveau'],
  categorie: 'level',
  cooldown: 5,
  permission: false,
  args: false
};