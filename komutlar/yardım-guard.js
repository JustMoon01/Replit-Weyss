const Discord = require ("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = (client, message) => {
 
  var prefix = ayarlar.prefix;
  
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Weyss Bot |Menüsü")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`

╔════════════════════════════════════╗
║**»** **${prefix}ban** : Sunucudan bir üyeyi yasaklar.
║**»** **${prefix}kick** : Sunucudan bir üyeyi atar.
║**»** **${prefix}sil** : Belirli bir kanaldaki mesajları siler.
║**»** **${prefix}antiraid** : Sunucuya izinsiz bot girmez.
║**»** **${prefix}antiraidbotizni** : Sunucuya gelecek bot için izin verirsin.
║**»** **${prefix}yavaş-mod** : Sohbete yazma sınır (süre) ekler.
║**»** **${prefix}sunucu-kur** : Bot sunucu kurar.
║**»** **${prefix}küfür-engel** : Küfür engel açıp kapatırsın.
║**»** **${prefix}reklam-engelle** : Reklam engel açıp kapatırsın.
║**»** **${prefix}modlog** : Modlog ayarlarsın.
║**»** **${prefix}emoji-ekle** : Sunucuya emoji eklersin.
║**»** **${prefix}nuke** : Kanala nuke atarsın.
║**»** **${prefix}everyone-engel** : Everyone engel açıp kapatırsın.
║
║
╚════════════════════════════════════╝
`) 
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=1041677012676390932&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/AbvaHaCQXx):ate:`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["y-g","yardım-guard"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardim-guard', 
    description: 'yardım menüsü',
    usage: 'yardım'
  };