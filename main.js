const fs = require("fs");
const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");

const Isuna = new Client();
Isuna.commands = new Collection();

const commandsFiles = fs.readdirSync('./commands').filter(files => files.endsWith('.js'));

for (const file of commandsFiles) {
  const command = require(`./commands/${file}`);
  Isuna.commands.set(command.name, command);
}

Isuna.on("message", message => {
  // Le bot va ignorer ses message et celui des autres bots
  if (message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!Isuna.commands.has(command)) return;
  Isuna.commands.get(command).execute(message, args);
});

Isuna.login(TOKEN);

Isuna.on("ready", () => {
  // const accueil = client.channel.id("727262603075911681");
  console.log(`${Isuna.user.tag}dit : Je suis prête`);
  // accueil.send("Le bot à été mis à jour");
});