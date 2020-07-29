const { MessageEmbed } = require("discord.js");

module.exports.run = async (Isuna, message, args) => {
  const user = await Isuna.users.fetch(args[0]);
  const reason = args.splice(1).join(" ") || 'Aucune raison spécifiée';
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Tu n\'as pas les permissions pour cette commande');
  if (!message.mentions) return message.reply('tu doit mentionner quelqu\'un');
  if (!user) return message.reply("L'utilisateur n'existe pas");
  message.guild.members.unban(user);
  // message de log
  const unbanlog = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
    .setColor("#1a660f")
    .setDescription(`**Action**: Unban\n **Raison**: ${reason} \n **Administrateur**: ${message.author.username}`)
    .setThumbnail(message.author.avatarURL())
    .setFooter(`Unban par ${message.author.username}`);

  // on cherche dans quel salon à été envoyé le message pour envoyer la unban log au bon endroit
  if (message.guild.id === '558961166882439199') Isuna.channels.cache.get('729607625104425010').send(unbanlog);
  else if (message.guild.id === '502490260211630101') Isuna.channels.cache.get('728893953713111040').send(unbanlog);
  else if (message.guild.id === '697587714542796891') Isuna.channels.cache.get('697802629715329108').send(unbanlog);
};
module.exports.help = {
  name: 'unban',
  description: 'cette commande permet de unban un membre (réservée uniquement aux administrateurs)',
  usage: '<Membre à unban>',
  categorie: 'administration',
  aliases: ['unban'],
  permission: true,
  permissionNeeded: 'BAN_MEMBERS',
  cooldown: 5,
  args: true
};