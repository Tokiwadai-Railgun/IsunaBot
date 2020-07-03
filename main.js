/* eslint-disable no-undef */
const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const { readdirSync } = require("fs");

const Isuna = new Client();
["commands", "cooldowns"].forEach(x => Isuna[x] = new Collection());

const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      Isuna.commands.set(getFileName.help.name, getFileName);
      console.log(`[ ${getFileName.help.name} ] : Commande chargée avec succes`);
    }
  });
};

loadCommands();

Isuna.on("message", message => {
  // Le bot va ignorer ses message et celui des autres bots
  if (message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (message.content === "noice") message.channel.send('https://tenor.com/view/noice-nice-click-gif-8843762');

  const command = Isuna.commands.get(commandName) || Isuna.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

  if (command.help.args && !args.lenght) {
    let noArgsReply = `Il faut que tu ajoute un argument à cette commande, ${message.author}`;

    if (command.help.usage) noArgsReply += `\n Voici comment utiliser la commande : \`\` isu ${command.help.name} ${command.help.usage}\`\``;
    
    return message.channel.send(noArgsReply);
  }

  if (!Isuna.cooldowns.has(command.help.name)) {
    Isuna.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamp = Isuna.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 5) * 1000;

  if (tStamp.has(message.author.id)) {
    const cdExpirationTime = tStamp.get(message.author.id) + cdAmount;

    if (timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.reply(`le cooldown de la commande est ${command.help.cooldown} et il te reste encore ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`\`${command.help.name}\`\``);
    }
  }

  tStamp.set(message.author.id, timeNow);
  setTimeout(() => tStamp.delete(message.author.id), cdAmount);

  command.run(Isuna, message, args);
});

Isuna.login(TOKEN);

Isuna.on("ready", () => {
  // const accueil = client.channel.id("727262603075911681");
  const isunaLog = Isuna.channels.cache.find(ch => ch.name === 'isuna-log');
  if (!isunaLog) return;

  isunaLog.send("J'ai reçus une mise à jour, demande à mon créateur pour plus de précision sur mas maj.");
  console.log(`${Isuna.user.tag}dit : Je suis prête`);
  // accueil.send("Le bot à été mis à jour");
});