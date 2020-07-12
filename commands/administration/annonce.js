const { MessageEmbed } = require("discord.js");

module.exports.run = (Isuna, message, args) => {
  if (!message.member.hasPermission('MENTION_EVERYONE')) return message.reply("Tu n'a pas la permission d'utiliser cette commande.");

  const annonceChannelPing = message.mentions.channels.first();
  const channel = message.guild.channels.cache.get(annonceChannelPing.id);
  const annonce = new MessageEmbed()
    .setColor("#f500ff")
    .setTitle("Annonce")
    .setDescription(args.splice(1).join(" "))
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setFooter(`Annonce de ${message.author.tag}`);

  channel.send(annonce);
};

module.exports.help = {
  name: "annonce",
  description: "envoie un embed personnalisable pour faire une annonce dans un channel spécifique",
  categorie: 'administration',
  aliases: ['announcement'],
  cooldown: 5,
  args: true,
  usage: '<un channel> <Votre annonce>',
  permission: true,
  permissionNeeded: 'MENTION_EVERYONE'
};