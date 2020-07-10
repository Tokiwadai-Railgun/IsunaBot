const { MessageEmbed } = require('discord.js');

module.exports.run = async (Isuna, message, args) => {
  // variables user, reason, et muteRole /!\ INDISPENSABLES /!\
  const userPing = message.mentions.users.first();
  const user = message.guild.members.cache.get(userPing.id);
  const reason = args.splice(1).join(" ");
  const muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  if (!message.member.hasPermission('MUTE_MEMBERS')) return message.reply('Tu n\'a pas les permissions pour utiliser cette commande');

  await user.roles.remove(muteRole.id);
  const unmutelog = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id}`)
    .setColor("#1a660f")
    .setDescription(`**Action**: unmute\n **Raison**: ${reason}\n modérateur: ${message.author}`)
    .setThumbnail(message.author.avatarURL())
    .setFooter(`mute par ${message.author.username}`, message.author.avatarURL());

  if (message.guild.id === '558961166882439199') Isuna.channels.cache.get('729607625104425010').send(unmutelog);
  else if (message.guild.id === '502490260211630101') Isuna.channels.cache.get('728893953713111040').send(unmutelog);
  else if (message.guild.id === '697587714542796891') Isuna.channels.cache.get('697802629715329108').send(unmutelog);
  message.channel.send(`<@${user.id}> à été mute par <@${message.author.id}> pour la raison : ${reason}.`);
};
module.exports.help = {
  name: 'unmute',
  description: 'cette commande permet de unmute un membre (réservée uniquement aux modérateurs)',
  usage: '',
  categorie: 'administration',
  aliases: ['unmute'],
  cooldown: 5,
  args: true
};