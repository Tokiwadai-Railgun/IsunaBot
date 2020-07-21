const { MessageEmbed, MessageReaction } = require("discord.js");

module.exports.run = (Isuna, message, args) => {
  const replymessage = args.splice(0).join(" ");

  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Tu n\' a pas la permission d\'utiliser cette commande');
  if (!replymessage) return message.reply("Tu doit donner un message sur lequel sera la réactions");

  message.channel.send(replymessage).then( async msg => {
    await msg.react('733702120431157259');

    if (msg.messageReactionAdd) {
    }
  });
};

module.exports.help = {
  name: 'rulecheck',
  description: 'permet de créer un réaction role',
  categorie: '',
  aliases: ['tfdgyh'],
  permission: true,
  permissionNeeded: ["MANAGE_ROLES"],
  cooldown: 5,
  args: true,
  usage: "<id d'un message> <l'moji quis ervira de réaction> <le rôle à donner>"
};