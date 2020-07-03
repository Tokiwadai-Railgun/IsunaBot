module.exports.run = (Isuna, message, args) => {
  const user = message.mentions.users.first();
  const reason = args.splice(1).join(" ");
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Tu n\'as pas les permissions pour cette commande');
  if (user.tag === message.author.tag) return message.reply("Tu ne peux pas te ban toi-même");
  if (user.hasPermission('BAN_MEMBERS' || 'ADMINISTRATOR')) return message.reply('Tu n\'a pas le droit de ban un autre administrateur');
  user ? message.guild.member(user).ban(reason) : message.channel.send('l\'utilisateur n\'existe pas');
};
module.exports.help = {
  name: 'ban',
  description: 'ban un membre',
  aliases: ['ban'],
  cooldown: 5,
  permission: true,
  permissionNeeded: 'BAN_MEMBER',
  args: false
};