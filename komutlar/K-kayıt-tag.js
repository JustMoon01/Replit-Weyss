const Discord = require('discord.js');

const db = require('quick.db');

exports.run = async(client, message, args) => {

var text = args.slice(0).join(' ')

if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir Tag Belirtin!"))

db.set(`kayıttag_${message.guild.id}`, text)

return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Kayıt Tagı Başarıyla ${text} Olarak Ayarlandı!`))

};

exports.conf = {

aliases: ['kayıt-tag'],

permLevel: 3

};

exports.help = {

name: "kayıttag"

}