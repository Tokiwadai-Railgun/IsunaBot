module.exports = {
  name: 'ping',
  description: 'repond pong',
  execute(message, args) {
    message.channel.send("Pong!");
  }
};