const discord = require('discord.js')

const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

let rol = message.mentions.roles.first();   

if (!rol) {

  const weyss = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL)  

.setTitle(`${client.user.username} - Kayıt Yetkili Ayarla `)

.setColor('BLACK')

.setDescription(`Ayarlayacağınız Kayıt Yetkili Rolünü Belirtiniz ! `)

.setThumbnail(client.user.avatarURL)

.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

message.channel.send(weyss)

}

db.set(`kyetkilirol_${message.guild.id}`, rol.id)

const weysss = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL)  

.setTitle(`${client.user.username} - Kayıt Yetkili Ayarlandı `)

.setColor('BLACK')

.setDescription(`Kayıt Yetkili Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)

.setThumbnail(client.user.avatarURL)

.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

message.channel.send(weysss)

  

}

exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['kayıtyetkili', 'kyetkili', 'k-yetkili'],

  permlevel: 0

}

exports.help = {

  name: 'kayıt-yetkili',

  description: 'erkek rolünü ayarlar',

  usage: '!erkek-rol @rol'

}