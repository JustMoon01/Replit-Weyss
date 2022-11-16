const discord = require('discord.js')

const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

let rol = message.mentions.roles.first();   

if (!rol) {

  const weyss = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL)  

.setTitle(`${client.user.username} - Erkek Rol Ayarla `)

.setColor('BLACK')

.setDescription(`Ayarlayacağınız Erkek Rolünü Belirtiniz ! `)

.setThumbnail(client.user.avatarURL)

.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

message.channel.send(weyss)

}

db.set(`erkekrol_${message.guild.id}`, rol.id)

const weysss = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL)  

.setTitle(`${client.user.username} - Erkek Rol Ayarlandı `)

.setColor('BLACK')

.setDescription(`Erkek Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)

.setThumbnail(client.user.avatarURL)

.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

message.channel.send(weysss)

  

}

exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['erkekrol', 'erol', 'e-rol'],

  permlevel: 0

}

exports.help = {

  name: 'erkek-rol',

  description: 'erkek rolünü ayarlar',

  usage: '!erkek-rol @rol'

}