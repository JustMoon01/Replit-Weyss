const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle(" Sharpen Bot | Yardım Menüsü")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`


╔════════════════════════════════════╗
║**»** **!ban** : Sunucudan bir üyeyi yasaklar.
║**»** **!kick** : Sunucudan bir üyeyi atar.
║**»** **!sil** : Belirli bir kanaldaki mesajları siler.
║**»** **!antiraid** : Sunucuya izinsiz bot girmez.
║**»** **!antiraidbotizni** : Sunucuya gelecek bot için izin verirsin.
║**»** **!yavaş-mod** : Sohbete yazma sınır (süre) ekler.
║**»** **!sunucu-kur** : Bot sunucu kurar.
║**»** **!küfür-engel** : Küfür engel açıp kapatırsın.
║**»** **!reklam-engelle** : Reklam engel açıp kapatırsın.
║**»** **!modlog** : Modlog ayarlarsın.
║**»** **!emoji-ekle** : Sunucuya emoji eklersin.
║**»** **!nuke** : Kanala nuke atarsın.
║**»** **!everyone-engel** : Everyone engel açıp kapatırsın.
║
║
╚════════════════════════════════════╝
`) 
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=728920362636542032&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/G5CZFT3) **|** [WebSitesi](http://ab.arrow-bot.tk/) :ate:`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["y","yardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: 'yardım menüsü',
    usage: 'yardım'
  };