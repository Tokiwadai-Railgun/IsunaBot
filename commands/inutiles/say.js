module.exports.run = (Isuna, message, args) => {
  message.channel.send(args.join(" "));
};

module.exports.help = {
  name: 'say',
  description: 'permet de parler à la place du bot',
  aliases: ['répète'],
  usage: '<Votre_Message>',
  cooldown: 5,
  permission: false,
  args: true
};