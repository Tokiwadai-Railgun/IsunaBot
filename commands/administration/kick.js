module.exports.run = (Isuna, message, args) => {
  const user = message.mentions.users.first();
  const reason = args.splice(1).join(" ");
  if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Tu n\'as pas les permissions pour cette commande');
  if (user.tag === message.author.tag) return message.reply("Tu ne peux pas te kick toi-même");
  if (user.hasPermission('KICK_MEMBERS' || 'ADMINISTRATOR')) return message.reply('Tu n\'a pas le droit de kick un autre administrateur');
  user ? message.guild.member(user).kick(reason) : message.channel.send('l\'utilisateur n\'existe pas');
};
module.exports.help = {
  name: 'kick',
  description: 'exclus un membre ',
  aliases: ['kick'],
  cooldown: 5,
  args: false
};