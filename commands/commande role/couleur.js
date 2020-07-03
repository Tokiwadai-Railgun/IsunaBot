module.exports.run = (Isuna, message, args) => {
  args.forEach(rName => {
    let role = message.guild.roles.cache.find(r => r.name === rName.toString());
    if (role) {
      if (message.member.roles.cache.has(role.id)) {
        message.channel.send("Tu avais déjà cette couleur alors je te l'ai supprimé");
        message.member.roles.remove(role);
        return;
      }

      if (role.permissions.has('SEND_MESSAGES')) return message.channel.send("Me prend pas pour une idiote, cette commande est pour donenr une couleur pas pour te give nimporte quel rôle !");

      message.member.roles.add(role)
        .then(m => message.channel.send(`Je t'ai bien ajouté ta couleur, si ça n'a pas marche ping @[𝔗𝔬𝑘𝔦𝔴𝔞𝔡𝔞𝔦 𝓡𝔞𝔦𝔩𝔤𝔲𝔫] 𝑀𝒾𝓁𝒾𝓂 𝒩𝒶𝓋𝒶#7693`, { allowedMentions: false }))
        .catch(e => console.log(e));
    } else {
      message.channel.send("Cette couleur n'existe pas.");
    }
  });
};

module.exports.help = {
  name: 'couleur',
  description: 'give une couleur',
  aliases: ['color'],
  cooldown: 5,
  usage: "<Votre_message>",
  args: true
};