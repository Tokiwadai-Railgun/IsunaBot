module.exports = Isuna => {
  if (!Isuna.channels.cache.find(ch => ch.name === 'izuna-log')) return;
  const isunaLog = Isuna.channels.cache.get('733580968534868090');
  if (!isunaLog) return;
  
  Isuna.user.setActivity("/!\\ maintenance /!\\ izu help", { type: 'LISTENING' });
  isunaLog.send("Aucun probleme détécté lors du démarrage");
  console.log(`${Isuna.user.tag}dit : Je suis prête`);
};