module.exports.run = (Isuna, message, args) => {
  const rName = args.splice(1);
  const role = message.guild.roles.cache.find(r => r.name === rName.toString());
  const userPing = message.mentions.users.first();

  if (role) {
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("Tu n'a pas les permissions d'utiliser la commande, demande à un administrateur ou à @[𝔗𝔬𝑘𝔦𝔴𝔞𝔡𝔞𝔦 𝓡𝔞𝔦𝔩𝔤𝔲𝔫] 𝑀𝒾𝓁𝒾𝓂 𝒩𝒶𝓋𝒶#7693 pour plus de précision");

    if (!message.guild.member(userPing).roles.cache.has(role.id)) {
      message.channel.send(`${userPing} n'a pas le rôle donc je ne peux pas lui enlever`);
      return;
    }

    message.guild.member(userPing).roles.remove(role) 
      .then (m => message.channel.send(`${userPing} n'a plus le rôle ${role}`))
      .catch (e => console.log(e));
  } else {
    message.channel.send("Gne Gne Gne, tu réfléchit à un moment dans ta vie, si le rôle n'existe pas tu ne peux pas l'avoir et donc je ne peux pas te l'enlever");
  }
};

module.exports.help = {
  name: 'roleremove',
  description: 'remove un rôle',
  aliases: ['rolesuppr'],
  cooldown: 5,
  permission: true,
  permissionNeeded: 'MANAGE_ROLES',
  usage: "<Le rôle>",
  args: true
};