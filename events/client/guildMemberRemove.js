module.exports = (Isuna, member) => {
  if (Isuna.guild.id === '502490260211630101') {
    const bvnchannel = Isuna.guild.channels.cache.get("727262603075911681");
  
    bvnchannel.send(`Oh non... ${member} à quitter le serveur :sob:`);
  }
}