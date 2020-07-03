module.exports.run = (Isuna, message, args) => {
  args.forEach(rName => {
    let role = message.guild.roles.cache.find(r => r.name === rName.toString());
    if (role) {
      if (!message.member.roles.cache.has(role.id)) return message.channel.send("Je ne peux pas t'enlever un rôle que tu n'a pas, réfléchit");

      message.member.roles.remove(role) 
        .then (m => message.channel.send(`Je t'ai remove le rôle ${role}`))
        .catch (e => console.log(e));
    } else {
      message.channel.send("Gne Gne Gne, tu réfléchit à un moment dans ta vie, si le rôle n'existe pas tu ne peux pas l'avoir et donc je ne peux pas te l'enlever");
    }
  });
};

module.exports.help = {
  name: 'roleremove',
  description: 'remove un rôle',
  aliases: ['rolesuppr'],
  cooldown: 5,
  usage: "<Votre_Commande>",
  args: true
};
