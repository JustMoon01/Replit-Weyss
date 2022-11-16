const discord = require('discord.js')

const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

let kanal = message.mentions.channels.first();   

if (!kanal) {

  const weyss = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL)  

.setTitle(`${client.user.username} - Kayıt Kanal Ayarla `)

.setColor('BLACK')

.setDescription(`Ayarlayacağınız Kayıt Kanalını Belirtiniz ! `)

.setThumbnail(client.user.avatarURL)

.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

message.channel.send(weyss)

}

db.set(`kayitkanal_${message.guild.id}`, kanal.id)

const weysss = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL)  

.setTitle(`${client.user.username} - Kayıt Kanalı Ayarlandı `)

.setColor('BLACK')

.setDescription(`Kayıt Kanalı Başarıyla ${kanal} Olarak Ayarlandı ! `)

.setThumbnail(client.user.avatarURL)

.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

message.channel.send(weysss)

  

}

exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['kayıtkanal', 'k-kanal', 'kkanal'],

  permlevel: 0

}

exports.help = {

  name: 'kayıt-kanal',

  description: 'erkek rolünü ayarlar',

  usage: '!erkek-rol @rol'

}