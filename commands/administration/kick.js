const { MessageEmbed } = require('discord.js');

module.exports.run = (Isuna, message, args) => {
  const userPing = message.mentions.users.first();
  const user = message.guild.members.cache.get(userPing.id);
  const reason = args.splice(1).join(" ");
  
  if (!message.member.hasPermission('KICK_MEMBERS') || !message.author.tag === "[𝔗𝔬𝑘𝔦𝔴𝔞𝔡𝔞𝔦 𝓡𝔞𝔦𝔩𝔤𝔲𝔫] 𝑀𝒾𝓁𝒾𝓂 𝒩𝒶𝓋𝒶#7678") return message.reply('Tu n\'as pas les permissions pour cette commande');
  if (user.tag === message.author.tag) return message.reply("Tu ne peux pas te kick toi-même");
  if (!message.mentions) return message.reply('tu doit mentionner quelqu\'un');
  if (user.hasPermission('KICK_MEMBERS' || 'ADMINISTRATOR')) return message.reply('Tu n\'a pas le droit de kick un autre administrateur');
  user ? message.guild.member(user).kick(reason) : message.channel.send('l\'utilisateur n\'existe pas');

  // kick log
  const kickLog = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id}`)
    .setColor("#ffa500")
    .setDescription(`**Action**: kick\n **Raison**: ${reason}`)
    .setThumbnail(message.author.avatarURL())
    .setFooter(`Kick par ${message.author.username}`, message.author.avatarURL());

  if (message.guild.id === '558961166882439199') Isuna.channels.cache.get('729607625104425010').send(kickLog);
  else if (message.guild.id === '502490260211630101') Isuna.channels.cache.get('728893953713111040').send(kickLog);
  else if (message.guild.id === '697587714542796891') Isuna.channels.cache.get('697802629715329108').send(kickLog);
};
module.exports.help = {
  name: 'kick',
  categorie: 'administration',
  description: 'permet d\'exclure un membre ',
  aliases: ['kick'],
  cooldown: 5,
  args: false
};