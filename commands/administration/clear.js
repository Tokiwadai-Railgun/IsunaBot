const { MessageEmbed } = require("discord.js");

module.exports.run = async (Isuna, message, args) => {
  // on vérifie si l'utilisateur à éntrer un nombre valide
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Tu n'a pas les permissions neccessaire pour utiliser cette commande");

  if (isNaN(args[0]) || (args[0] > 100 || args[0] < 1)) return message.reply("Il faut entrer un nombre valide. (entre 1 et 100");
  
  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0]),
    before: message.id
  });

  await message.channel.bulkDelete(messages);
  message.delete();

  const clearLog = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#dc143c")
    .setDescription(`**Action**: clear\n **Nombre de messages**: ${args[0]}\n **Salon**: ${message.channel} \n **Administrateur**: ${message.author.username}`);


  // on cherche dans quel salon à été envoyé le message pour envoyer la unban log au bon endroit
  if (message.guild.id === '558961166882439199') Isuna.channels.cache.get('729702251311923351').send(clearLog);
  else if (message.guild.id === '502490260211630101') Isuna.channels.cache.get('728893953713111040').send(clearLog);
  else if (message.guild.id === '697587714542796891') Isuna.channels.cache.get('697835700183236670').send(clearLog);
};
module.exports.help = {
  name: 'clear',
  description: 'permet de supprimer un certains nombre de messages(réservée uniquement aux modérateurs)',
  usage: '<Nombre de messages>',
  aliases: ['purge'],
  categorie: 'administration',
  permission: true,
  permissionNeeded: 'MANAGE_MESSAGES',
  cooldown: 5,
  args: true
};