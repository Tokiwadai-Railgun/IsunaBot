module.exports.run = (Isuna, message, args) => {
  const userMention = message.mentions.users.first();
  message.channel.send(`voici le tag de la personne mentionnée : ${userMention.tag}`);
};

module.exports.help = {
  name: 'userinfo',
  description: 'renvoie les information de la personne mentionnée',
  aliases: ['infoUtilisateur'],
  usage: '<La personne que vous voulez vérifier>',
  cooldown: 5,
  args: true
};