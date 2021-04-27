const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const exampleEmbed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`${client.user.username}`)
 .setDescription(`• Sitemiz •

https://web.blackcodetr.cf/`)
.setImage("https://cdn.discordapp.com/icons/823148112684122143/cca69e52463b396f03699cceed872466.webp?size=1024")
  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["site"],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',
  description: 'kuralları atar',
  usage: '!kurallar'
}; 