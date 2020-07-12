module.exports = (Isuna, member) => {
  if (member.guild.id === '502490260211630101') {
    const bvnchannel = member.guild.channels.cache.get("727262603075911681");

    bvnchannel.send(`${member.displayName} à rejoin le serveur. YOUPI!!!!`);
  }
}