module.exports.run = (Isuna, message, args) => { 
  const rName = args.splice(1);
  const role = message.guild.roles.cache.find(r => r.name === rName.toString());
  const userPing = message.mentions.users.first(); 

  if (role) { 
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("Tu n'a pas les permissions d'utiliser la commande, demande à un administrateur ou à @[𝔗𝔬𝑘𝔦𝔴𝔞𝔡𝔞𝔦 𝓡𝔞𝔦𝔩𝔤𝔲𝔫] 𝑀𝒾𝓁𝒾𝓂 𝒩𝒶𝓋𝒶#7693 pour plus de précision");

    if (message.guild.member(userPing).roles.cache.has(role.id)) {
      message.channel.send(`${userPing} a déjà ce rôle`);
      return;
    }

    if (role.permissions.has('KICK_MEMBERS') || role.permissions.has('ADMINISTRATOR') || role.permissions.has('MANAGE_ROLES')) return message.channel.send("Me prend pas pour une idiote, t'a pas la permission d'avoir ce rôle donc je vais pas te le donner !");

    message.guild.member(userPing).roles.add(role)
      .then(message.channel.send(`${userPing} possède desormais le rôle ${role}`, { allowedMentions: false }))
      .catch(e => console.log(e));
  } else {
    message.channel.send("Ce rôle n'existe pas");
  }
};

module.exports.help = {
  name: 'roleadd',
  description: 'give un role',
  aliases: ['rolegrabb'],
  cooldown: 5,
  permission: true,
  permissionNeeded: ['MANAGE_ROLE'],
  usage: "<Le rôle>",
  args: true
};