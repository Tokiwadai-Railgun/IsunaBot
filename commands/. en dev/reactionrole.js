const { MessageEmbed } = require('discord.js');

module.exports.run = (Isuna, message, args) => {
  // variables 
  const add_remove = args[0]
  const channel = message.guild.channels.cache.find(message.mentions.channels.first());
  const messageID = args[2];
  const emoji = args[3];
  const role = args.splice(4);

  // on vérifie si l'utilisateur à les permissions
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Tu n\'a pas les permissions pour utiliser cette commande' );

  // on vérifie si les variables sont correctes
  if (!add_remove === 'add' || 'remove') return message.reply(`Tu doit entrer add ou remove en 1er argument, tape isu help reactionrole pour plus d'informations`);
  if (!channel) return message.reply('Tu doit mentionner un channel');
  if (!messageID) return message.reply('tu doit entrer l\'id d\'un message dans le channel mentionné just avant');
  if (!emoji) return message.reply('Tu doit ajouter un emoji à la commande');
  if (!role) return message.reply('tu doit indiquer quel rôle je doit ajouter sinon je peux pas deviner toute seul BAKA.');

};
module.exports.help = {
  name: 'reactionrole',
  description: 'permet de créer un réaction rôle, en cliquant sur une réaction d\'un message dans un salon vous pouvez obtenir un rôle',
  aliases: ['reactionrole', 'rolereaction'],
  categorie: '. en dev',
  cooldown: 5,
  permission: true,
  permissionNeeded: 'MANAGE_ROLES',
  args: true,
  usage: '<add/remove> <channel ou se trouve le message> <Id du message> <emoji pour la réaction>'
};