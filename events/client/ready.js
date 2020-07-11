module.exports = Isuna => {
  if (!Isuna.channels.cache.find(ch => ch.name === 'isuna-log')) return;
  const isunaLog = Isuna.channels.cache.find(ch => ch.name === 'isuna-log');
  if (!isunaLog) return;
  
  isunaLog.send("Aucun probleme détécté lors du démarrage");
  console.log(`${Isuna.user.tag}dit : Je suis prête`);
}