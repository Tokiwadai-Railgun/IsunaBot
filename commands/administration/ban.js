const { MessageEmbed } = require("discord.js");

module.exports.run = (Isuna, message, args) => {
  const userPing = message.mentions.users.first();
  const user = message.guild.members.cache.get(userPing.id);
  const reason = args.splice(1).join(" ") || 'Aucune raison spécifiée';
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Tu n\'as pas les permissions pour cette commande');
  if (user.tag === message.author.tag) return message.reply("Tu ne peux pas te ban toi-même");
  if (!message.mentions) return message.reply('tu doit mentionner quelqu\'un');
  if (user.hasPermission('BAN_MEMBERS' || 'ADMINISTRATOR')) return message.reply('Tu n\'a pas le droit de ban un autre administrateur');
  user ? message.guild.member(user).ban(reason) : message.channel.send('l\'utilisateur n\'existe pas');

  // message de log
  const banlog = new MessageEmbed()
    .setAuthor(`${userPing.username} (${user.id})`, userPing.avatarURL())
    .setColor("#dc143c")
    .setDescription(`**Action**: Ban\n **Raison**: ${reason}\n ${message.author.name}`)
    .setThumbnail(message.author.avatarURL())
    .setFooter(`Ban par ${message.author.username}`);
 
  // on cherche dans quel salon à été envoyé le message pour envoyer la ban log au bon endroit
  if (message.guild.id === '558961166882439199') Isuna.channels.cache.get('729607625104425010').send(banlog);
  else if (message.guild.id === '502490260211630101') Isuna.channels.cache.get('728893953713111040').send(banlog);
  else if (message.guild.id === '697587714542796891') Isuna.channels.cache.get('697802629715329108').send(banlog);
};
module.exports.help = {
  name: 'ban',
  description: 'cette commande permet d\'exclure un membre (réservée uniquement aux modérateurs)',
  aliases: ['ban'],
  categorie: 'administration',
  cooldown: 5,
  permission: true,
  permissionNeeded: 'BAN_MEMBER',
  args: true,
  usage: '<membre à ban>'
};