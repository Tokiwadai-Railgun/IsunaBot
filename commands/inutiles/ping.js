module.exports.run = (Isuna, message, args) => {
  {
    message.channel.send("Pong!");
  }
};
module.exports.help = {
  name: 'ping',
  description: 'repond pong',
  aliases: ['ping'],
  cooldown: 5,
  permission: false,
  args: false
};