const { MessageEmbed } = require("discord.js");

module.exports.run = (Isuna, message, args) => {
  const embed = new MessageEmbed()
    .setColor("##f500ff")
    .setTitle("Titre de l'embed")
    .setURL("https://google.com")
    .setDescription("Description de l'embed")
    .setThumbnail(Isuna.user.displayAvatarURL())
    .addFields(
      { name: "champ1", value: "culture : colza :D" },
      { name: "champ2", value: "cette fois-ci c'est du blé :p" }
    )
    .setImage(Isuna.user.displayAvatarURL())  
    .setTimestamp()
    .setFooter("Je suis le pied d'un joueur de foot");

  message.channel.send(embed);
};

module.exports.help = {
  name: "embed",
  descritpion: "envoie un embed",
  aliases: ['embed'],
  cooldown: 5,
  args: false
};