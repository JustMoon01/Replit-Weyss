const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const exampleEmbed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`${client.user.username}`)
 .setDescription(`• Yardım •

!site
• Site'ye ulaşırsınız.

!site-stats
• Site istatistiklerine ulaşırsınız.

•Herhangi bir sorununuz varsa yetkiliye danışınız`)
  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","yardım"],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',
  description: 'kuralları atar',
  usage: '!yardım'
}; 