module.exports.run = (Isuna, message) => {
  {
    message.channel.send("Pong!");
  }
};
module.exports.help = {
  name: 'ping',
  description: 'repond pong',
  aliases: ['ping'],
  categorie: 'autres',
  cooldown: 5,
  permission: false,
  args: false
};