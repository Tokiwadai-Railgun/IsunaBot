const config = require("../../config.json");
console.log(0);
module.exports = (user, reaction) => {
  console.log(1); 
  if (user.bot || !reaction.message.guild) return;
  const reactionRoleElem = config.reactionrole[reaction.message.id];
  if (!reactionRoleElem) return;
  const prop = reaction.emoji.id ? "id" : " name";
  const emoji = reactionRoleElem.emoji.find(emoji => emoji[prop] === reaction.emoji[prop]);
  if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles);
  else reaction.users.remove(user);
}; 