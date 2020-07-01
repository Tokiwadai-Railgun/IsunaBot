module.exports = {
  name: 'créa',
  description: 'dis qui est son créateur',
  execute(message, args) {
    if (message.author.tag === "[𝔗𝔬𝑘𝔦𝔴𝔞𝔡𝔞𝔦 𝓡𝔞𝔦𝔩𝔤𝔲𝔫] 𝑀𝒾𝓁𝒾𝓂 𝒩𝒶𝓋𝒶#7693") {
      message.reply("Quelle question tu est mon créateur !");
    } else {
      message.channel.send("Mon créateur est [𝔗𝔬𝑘𝔦𝔴𝔞𝔡𝔞𝔦 𝓡𝔞𝔦𝔩𝔤𝔲𝔫] 𝑀𝒾𝓁𝒾𝓂 𝒩𝒶𝓋𝒶#7693");
    }
  }
};