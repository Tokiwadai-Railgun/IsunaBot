const { MessageEmbed } = require("discord.js");

module.exports.run = (Isuna, message, args) => {
  const annonce = new MessageEmbed()
    .setColor("#f500ff")
    .setTitle("Annonce")
    .setDescription(args.join(" "))
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setFooter(`Annonce de ${message.author.tag}`);

  message.channel.send(annonce);  
  // const annonce = message.mentions.channels.id;
  // const channel = Isuna.channels.cache.find(ch => ch.name === message.mentions.channels.name);
  // message.channel.send(annonce);
  // Isuna.channels(channelId).send(annonce);
};

module.exports.help = {
  name: "annonce",
  descritpion: "envoie un embed",
  aliases: ['announcement'],
  cooldown: 5,
  permission: false,
  args: false
};