const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`
 > \`!antiraid -> Sunucuya izinsiz bot giremez.\`

 > \`!antiraidbotizni -> Botun sunucuya girmesi için izin verirsiniz.\` 

 > \`!ban -> Üyeyi banlarsın.\`
 
 > \`!ban -> Üyeyi banlarsın.\`
 > \`s!davet -> Botun Davetini ve Destek Sunucunu gösterir.\``)
 .setFooter(`Sharpen Sunar .`)
    .setTimestamp()
message.channel.send(embed) 
//sharpen
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',   //sharpen
  description: '',
  usage: ''
};
