const Discord = require('discord.js');

const qdb = require('quick.db');

module.exports.run = async(client, message, args) => {

qdb.delete(`kyetkilirol_${message.guild.id}`)

qdb.delete(`erkekrol_${message.guild.id}`)

qdb.delete(`arol_${message.guild.id}`)

qdb.delete(`kayitkanal_${message.guild.id}`)

qdb.delete(`kayıttag_${message.guild.id}`)

qdb.delete(`kızrol_${message.guild.id}`)

return message.channel.send(

new Discord.MessageEmbed()

.setColor('BLACK')

.setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))

.setTitle(":white_check_mark: Başarılı!")

.setDescription(`Bot'un bütün kayıt veritabanı sıfırlandı!`)

.setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))

)

};

exports.conf = {

  aliases: [], 

  permLevel: 3

};

exports.help = {

  name: "kayıt-sıfırla"

};