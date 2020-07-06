module.exports.run = async (Isuna, message, args) => {
  // variables user, reason, et muteRole /!\ INDISPENSABLES /!\
  const userPing = message.mentions.users.first();
  const user = message.guild.members.cache.get(userPing.id);
  const reason = args.splice(1).join(" ");
  const muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  // si la personne qui entre la commande n'a pas les permissions alors on lui dis
  if (!message.member.hasPermission('MUTE_MEMBERS')) return message.reply('Tu n\'a pas les permissions pour utiliser cette commande');
  // si je rôle n'existe pas alors on le créer et on envoie une log dans le salon
  if (!muteRole) {
    const isuna_log = Isuna.channels.cache.get('728893953713111040');
    
    await message.guild.roles.create({
      data: {
        name: 'muted',
        color: '#3b3a3a',
        permissions: []
      },
      reason: 'manque du role muted'
    });

    message.guild.channels.cache.forEach(async channel => {
      await channel.updateOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: false,
        ADD_REACTIONS: false
      });
    });
    isuna_log.send(`un mute rôle à été créer car il étais inéxistant dans ${message.guid.name}`);
  }

  await user.roles.add(muteRole.id);
  message.channel.send(`<@${user.id}> à été mute par <@${message.author.id}> pour la raison : ${reason}.`);
};
module.exports.help = {
  name: 'mute',
  description: 'cette commande permet de mute un membre (réservée uniquement aux modérateurs)',
  usage: '<User à mute> <Raison>',
  aliases: ['mute'],
  categorie: 'administration',
  cooldown: 5,
  permission: true,
  permissionsNeeded: 'MUTE_MEMBERS',
  args: true
};