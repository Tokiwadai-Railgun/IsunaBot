module.exports = (Isuna, member) => {
  if (member.guild.id === '502490260211630101') {
    const bvnchannel = member.guild.channels.cache.get("727262603075911681");

    bvnchannel.send(`${member.displayName} à rejoin le serveur. YOUPI!!!!`);
  }
  if (member.guild.id === '732692494621605909' ) {
    const bvnchannel = member.guild.channels.cache.get("732692494621605913");

    bvnchannel.send(`Bienvenue ${member} sur ${member.guild.displayName()}. \n https://tenor.com/view/milim-nava-anime-demon-lord-happy-cute-gif-13644168`);
  }
};