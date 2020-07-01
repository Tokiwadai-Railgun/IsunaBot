const { execute } = require("./userInfo");

module.exports = {
  name: 'noice',
  description: 'met le gif noice quand qqn dit "noice"',
  execute(message, args) {
    message.channel.send("https://tenor.com/view/noice-nice-click-gif-8843762");
  }
};