const { MessageEmbed, Collection } = require('discord.js');
const PREFIX = 'izu/';
const xp = require(process.env.XP);
const fs = require('fs');
const monnaie = require(process.env.monnaie);

module.exports = (Isuna, message) => {
  // Le bot va ignorer ses message et celui des autres bots
  if (message.content.startsWith(PREFIX) || message.author.bot) return;

  // on sépare les agrument du préfix et on isole la commande
  const args = message.content.slice(PREFIX.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  // raid protection
  if (message.content.includes('https://discord.gg/') && !message.member.hasPermission('MENTION_EVERYONE')) {
    message.delete();

    const discordPubLog = new MessageEmbed()
      .setTitle('PUB')
      .setColor("#dc143c")
      .setDescription(`**PUB**\n **Channel**: ${message.channel} \n **User**: ${message.author.tag} `);

    if (message.guild.id === '558961166882439199') Isuna.channels.cache.get('729607625104425010').send(discordPubLog);
    else if (message.guild.id === '502490260211630101') Isuna.channels.cache.get('728893953713111040').send(discordPubLog);
    else if (message.guild.id === '697587714542796891') Isuna.channels.cache.get('697802629715329108').send(discordPubLog);
    return;
  }

  // système d'xp
  if (message.guild.id === '732692494621605909') { 
    const addXp = Math.floor(Math.random() * 5) + 1;
    
    if (!xp[message.author.id]) {
      xp[message.author.id] = {
        xp: 0,
        xpTotal: 0,
        niveau: 1
      };
    }
    
    const xpactuelle = xp[message.author.id].xp;
    const niveauactuelle = xp[message.author.id].niveau;
    const xpNeeded = niveauactuelle * 300;


    xp[message.author.id].xp = xpactuelle + addXp;
    xp[message.author.id].xpTotal = xpactuelle + addXp;
    
    if (xpNeeded <= xpactuelle) {
      xp[message.author.id].niveau += 1;
      message.reply(`Bravo tu est monté niveau ${niveauactuelle + 1}`);
      xp[message.author.id].xp -= xpNeeded;
      monnaie[message.author.id].cash += 10;
    }
    fs.writeFile('./exp.json', JSON.stringify(xp), err => {
      if (err) console.log(err);
    });
  }

  // pour le noice
  if (message.content === "noice") message.channel.send('https://tenor.com/view/noice-nice-click-gif-8843762');

  // on cherche le nom de la commande ou un aliace
  const command = Isuna.commands.get(commandName) || Isuna.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

  // on cherche si la commande doit avoir des arguments et si elle en a, si oui et non alor son envoie un message d'erreur à l'utilisateur 
  if (command.help.args && !args.length) {
    let noArgsReply = `Il faut que tu ajoute un argument à cette commande, ${message.author}`;

    // on dis comment utiliser la commande en cas d'erreur
    if (command.help.usage) noArgsReply += `\n Voici comment utiliser la commande : \`\` isu ${command.help.name} ${command.help.usage}\`\``;
    
    return message.channel.send(noArgsReply);
  }

  // on cherche le cooldown et on le set à l'utlisateur quand la commande est utilisée
  if (!Isuna.cooldowns.has(command.help.name)) {
    Isuna.cooldowns.set(command.help.name, new Collection());
  }

  // variables indispendable pour le cooldown
  const timeNow = Date.now();
  const tStamp = Isuna.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 5) * 1000;

  if (tStamp.has(message.author.id)) {
    const cdExpirationTime = tStamp.get(message.author.id) + cdAmount;

    if (timeNow < cdExpirationTime) {
      const timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.reply(`le cooldown de la commande est ${command.help.cooldown} et il te reste encore ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`\`${command.help.name}\`\``);
    }
  }

  tStamp.set(message.author.id, timeNow);
  setTimeout(() => tStamp.delete(message.author.id), cdAmount);

  command.run(Isuna, message, args);
}