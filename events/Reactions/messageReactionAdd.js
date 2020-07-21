module.exports = (user, reaction) => {
  console.log(1);
  const message = reaction.message;
  if (user.bot) return;
  const roleName = '🎇Membre🎇';
  const role = reaction.message.guild.roles.cache.get('732868683679924344');
  const member = reaction.message.guild.members.cache.get(reaction.message.member.id);
  console.log(2);
  
  if (message.id === '733397344468598936') {
    console.log(reaction);
  }
}; 