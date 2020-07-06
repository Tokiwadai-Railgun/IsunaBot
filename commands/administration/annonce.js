const { MessageEmbed } = require("discord.js");

module.exports.run = (Isuna, message, args) => {
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
  descritpion: "envoie un embed",
  categorie: 'administration',
  aliases: ['announcement'],
  cooldown: 5,
  args: true,
  usage: '<Votre annonce>',
  permission: true,
  permissionNeeded: 'MENTION_EVERYONE'
};