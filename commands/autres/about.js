const { MessageEmbed } = require('discord.js');
module.exports.run = (Isuna, message) => {
  const info = new MessageEmbed()
    .setTitle(message.guild)
    .setColor('#f500ff')
    .addFields(
      { name: "Nom du  serveur : ", value: message.guild},
      { name: "Date de création : ", value: message.guild.createdAt}
    );

  message.channel.send(info);
};
module.exports.help = {
  name: 'about',
  description: 'donne des info sur le serveur',
  aliases: ['info'],
  categorie: 'autres',
  cooldown: 5,
  permission: false,
  args: false
};