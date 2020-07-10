module.exports.run = (Isuna, message, args) => {
  message.channel.send(args.join(" "));
};

module.exports.help = {
  name: 'say',
  description: 'Je vais repeter ton message',
  aliases: ['répète'],
  usage: '<Votre_Message>',
  categorie: 'autres',
  cooldown: 5,
  permission: false,
  args: true
};