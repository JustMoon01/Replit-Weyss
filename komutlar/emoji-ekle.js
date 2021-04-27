const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const exampleEmbed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`${client.user.username}`)
 .setDescription(`• Sitemiz •

https://web.blackcodetr.cf/`)
  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["site"],
  permLevel: 0
};

exports.help = {
  name: 'site',
  description: 'site atar',
  usage: '!site'
}; 