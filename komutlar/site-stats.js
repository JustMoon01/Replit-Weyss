const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const exampleEmbed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`${client.user.username}`)
 .setDescription(`• Sitemiz •
Toplam Kod Sayısı 44
Toplam Bot Sayısı 9
Toplam Uptime Sayısı 65

`)

  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["site-stats"],
  permLevel: 0
};

exports.help = {
  name: 'site-stats',
  description: 'site atar',
  usage: '!site-bilgi'
}; 