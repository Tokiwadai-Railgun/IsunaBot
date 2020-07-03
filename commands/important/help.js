const { MessageEmbed } = require("discord.js");

module.exports.run = (Isuna, message, args) => {
  const help = new MessageEmbed()
    .setColor("#ffff")
    .setTitle("Help")
    .setURL("")
    .setDescription("Voici les différentes commandes disponnibles avec le bot (le préfix est isu) :")
    .setThumbnail(Isuna.user.displayAvatarURL())
    .addFields(
      { name: 'help', value: 'Affiche la liste des commandes', inline: 'true' },
      { name: 'embed', value: 'Genère un embed totalement inutile (de base il me sert de test)', inline: 'true' },
      { name: 'crea', value: 'dis qui est le créateur du bot', inline: 'true' },
      { name: 'ping', value: 'Répond pong tout simplement', inline: 'true' },
      { name: 'userinfo', value: 'C\'est une commande inutile, elle permet d\'afficher le tag d\'une personne mentionnée', inline: 'true' },
      { name: "couleur", value: "Permet de choisire une couleure en faisant isu couleur <nom de la couleur avec première lettre en maj> " }
    )
    .setTimestamp()
    .setFooter("Gardez bien à l'esprit que le bot est toujours en développement");
    
  message.channel.send(help);
};

module.exports.help = {
  name: 'help',
  description: 'affiche la liste de toutes les commandes',
  aliases: ['h'],
  cooldown: 5,
  args: false
};