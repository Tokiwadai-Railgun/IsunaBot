module.exports = {
  name: 'help',
  description: 'affiche la liste de toutes les commandes',
  execute(message, args) {
    message.channel.send("Voila la liste des commandes : \n\n__help__ : affiche la liste des commandes \n\n__ping__ : repond pont (prochaine afficheras la latence en ms) \n\n__userinfo__ sonne le tag de la personne ping (oui inutile je sais mais bon...) \n\n__noice__: ce n'est pas vraiment une commande mais quand vous dire noice cela met tout simplement un gif \n\n__crea__: donne ne nom de mon créateur.");
  }
};