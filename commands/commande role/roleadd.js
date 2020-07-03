module.exports.run = (Isuna, message, args) => {  
  args.forEach(rName => {
    let role = message.guild.roles.cache.find(r => r.name === rName.toString());
    if (role) {
      if (message.member.roles.cache.has(role.id)) {
        message.channel.send("Tu a déjà ce rôle");
        return;
      }

      if (role.permissions.has('KICK_MEMBERS') || role.permissions.has('ADMINISTRATOR') || role.permissions.has('MANAGE_ROLES')) return message.channel.send("Me prend pas pour une idiote, t'a aps la permission d'avoir ce rôle donc je vais pas te le donner !");

      message.member.roles.add(role)
        .then(m => message.channel.send(`Vous possedez desormais le rôle ${role}`, { allowedMentions: false }))
        .catch(e => console.log(e));
    } else {
      message.channel.send("Ce rôle n'existe pas");
    }
  });
};

module.exports.help = {
  name: 'roleadd',
  description: 'give un role',
  aliases: ['rolegrabb'],
  cooldown: 5,
  usage: "<Votre_Commande>",
  args: true
};