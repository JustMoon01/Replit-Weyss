const discord = require('discord.js')

const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

let rol = message.mentions.roles.first();   

if (!rol) {

  const weyss = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL)  

.setTitle(`${client.user.username} - Kız Rol Ayarla `)

.setColor('BLACK')

.setDescription(`Ayarlayacağınız Kız Rolünü Belirtiniz ! `)

.setThumbnail(client.user.avatarURL)

.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

message.channel.send(weyss)

}

db.set(`kızrol_${message.guild.id}`, rol.id)

const weysss = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL)  

.setTitle(`${client.user.username} - Kız Rol Ayarlandı `)

.setColor('BLACK')

.setDescription(`Kız Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)

.setThumbnail(client.user.avatarURL)

.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

message.channel.send(weysss)

  

}

exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['k-rol', 'krol', 'krole'],

  permlevel: 0

}

exports.help = {

  name: 'kız-rol',

  description: 'erkek rolünü ayarlar',

  usage: '!erkek-rol @rol'

}