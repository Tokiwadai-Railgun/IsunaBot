module.exports.run = async (Isuna, message, args) => {
  // variables user, reason, et muteRole /!\ INDISPENSABLES /!\
  const userPing = message.mentions.users.first();
  const user = message.guild.members.cache.get(userPing.id);
  const reason = args.splice(1).join(" ");
  const muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  if (!message.member.hasPermission('MUTE_MEMBERS')) return message.reply('Tu n\'a pas les permissions pour utiliser cette commande');

  await user.roles.remove(muteRole.id);
  message.channel.send(`<@${user.id}> à été unmute par <@${message.author.id}> pour la raison : ${reason}.`);
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