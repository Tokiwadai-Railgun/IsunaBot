module.exports = {
  name: 'userinfo',
  description: 'renvoie les information de la personne mentionnée',
  execute(message, args) {
    const userMention = message.mentions.users.first();
    message.channel.send(`voici le tag de la personne mentionnée : ${userMention.tag}`);
  }
};