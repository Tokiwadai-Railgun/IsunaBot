const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Client({ disableEveryone: false });

client.on('ready', () => { 
  console.log(`${client.user.tag} dit: Je suis prête`);
});

client.on('message', msg => {
  // bk
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send('Pong!');
});

client.login(TOKEN);