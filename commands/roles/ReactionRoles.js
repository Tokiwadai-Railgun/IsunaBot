const { MessageEmbed } = require("discord.js");

module.exports.run = (Isuna, message, args) => {
  const emoji = args[0];
  const role = message.mentions.roles.first();
  const replymessage = args.splice(2).join(" ");

  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Tu n\' a pas la permission d\'utiliser cette commande');
  if (!emoji) return message.replu("Tu doit donner un emoji qui servira de réaction");
  if (!replymessage) return message.reply("Tu doit donner un message sur lequel sera la réactions");

  message.channel.send(replymessage).then( async msg => {
    await msg.react(emoji);
  })
};

module.exports.help = {
  name: 'reactionrole',
  description: 'permet de créer un réaction role',
  categorie: 'roles',
  aliases: ['rolereaction'],
  permission: true,
  permissionNeeded: ["MANAGE_ROLES"],
  cooldown: 5,
  args: true,
  usage: "<id d'un message> <l'moji quis ervira de réaction> <le rôle à donner>"
};