const { MessageEmbed } = require('discord.js');

module.exports.run = async (Isuna, message, args) => {
  // variables user, reason, et muteRole /!\ INDISPENSABLES /!\
  const userPing = message.mentions.users.first()
  const user = message.guild.members.cache.get(userPing.id);
  const reason = args.splice(1).join(" ");
  const muteRole = message.guild.roles.cache.find(r => r.name === '🥀muted🥀');
  console.log(message.guild.id);

  // si la personne qui entre la commande n'a pas les permissions alors on lui dis
  if (!message.member.hasPermission('MUTE_MEMBERS')) return message.reply('Tu n\'a pas les permissions pour utiliser cette commande');
  if (!message.mentions) return message.reply('tu doit mentionner quelqu\'un');
  // si je rôle n'existe pas alors on le créer et on envoie une log dans le salon
  if (!muteRole) {
    await message.guild.roles.create({
      data: {
        name: '🥀muted🥀',
        color: '#ffffff',
        permissions: []
      },
      reason: 'manque du role muted'
    });
  }

  if (message.guild.member(userPing).roles.cache.has(muteRole)) return message.reply('Cet utilisateur à déjà été mute');

  await user.roles.add(muteRole.id);

  // kick log
  const mutelog = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id}`)
    .setColor("#ffa500")
    .setDescription(`**Action**: mute\n **Raison**: ${reason}\n modérateur: ${message.author}`)
    .setThumbnail(message.author.avatarURL())
    .setFooter(`mute par ${message.author.username}`, message.author.avatarURL());

  if (message.guild.id === '558961166882439199') Isuna.channels.cache.get('729607625104425010').send(mutelog);
  else if (message.guild.id === '502490260211630101') Isuna.channels.cache.get('728893953713111040').send(mutelog);
  else if (message.guild.id === '697587714542796891') Isuna.channels.cache.get('697802629715329108').send(mutelog);
  else if (message.guild.id === '732692494621605909') Isuna.channels.cache.get("733582019371728947").send(mutelog);
};
module.exports.help = {
  name: 'mute',
  description: 'cette commande permet de mute un membre (réservée uniquement aux modérateurs)',
  usage: '<User à mute> <Raison>',
  aliases: ['mute'],
  categorie: 'administration',
  cooldown: 5,
  permission: true,
  permissionsNeeded: 'MUTE_MEMBERS',
  args: true
};