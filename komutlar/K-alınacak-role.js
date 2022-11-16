const discord = require('discord.js')

const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

let rol = message.mentions.roles.first();   

if (!rol) {

  const weyss = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL)  

.setTitle(`${client.user.username} - Alınacak Rol Ayarla `)

.setColor('BLACK')

.setDescription(`Kayıttan Sonra Alınacak Rolü Belirtiniz ! `)

.setThumbnail(client.user.avatarURL)

.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

message.channel.send(weyss)

}

db.set(`arol_${message.guild.id}`, rol.id)

const weysss = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL)  

.setTitle(`${client.user.username} - Alınacak Rol Ayarlandı `)

.setColor('BLACK')

.setDescription(`Alınacak Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)

.setThumbnail(client.user.avatarURL)

.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

message.channel.send(weysss)

  

}

exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['alınacakrol', 'arol', 'a-rol'],

  permlevel: 0

}

exports.help = {

  name: 'alınacak-rol',

  description: 'erkek rolünü ayarlar',

  usage: '!erkek-rol @rol'

}