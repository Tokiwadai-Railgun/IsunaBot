module.exports.run = async (Isuna, message, args) => {
  const user = await Isuna.users.fetch(args[0]);
  if (!user) return message.reply("L'utilisateur n'existe pas");
  message.channel.send(`voici le tag de la personne à qui appartien cet id : ${user.tag}`);
};

module.exports.help = {
  name: 'userinfo',
  description: 'permet de connaitre le teg d\'une personne à partir d\'une id',
  aliases: ['infoUtilisateur'],
  usage: '<id de la personne>',
  cooldown: 5,
  categorie: 'autres',
  permission: false,
  args: true
};