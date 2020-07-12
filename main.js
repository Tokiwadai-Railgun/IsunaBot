/* eslint-disable no-undef */

// variables indispensables
const { Client, Collection, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
// on dis de chercher les commandes dans le dossier commande et après dans les sous dossiers
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

const loadEvents = (dir = "./events/") => {
  readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
    console.log(loadEvents);
    for (const event of events) {
      const evt = require(`${dir}/${dirs}/${event}`);
      const evtName = event.split(".")[0];
      Isuna.on(evtName, evt.bind(null, Isuna));
    }
  });
};

loadCommands();
loadEvents();

// Isuna.login(process.env.TOKEN);
Isuna.login('NzI3NDkxNjIzNDMyMzU1OTIy.XvtOTA.hZ_ceoaiBJcKlHJazW-dve0iZjw');