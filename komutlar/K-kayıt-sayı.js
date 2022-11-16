const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {

  var prefix = ayarlar.prefix;
  
    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author

  const mhelp = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .setAuthor(`${client.user.username} `, client.user.avatarURL)

    .setTitle("Weyss Bot | Yardım Menüsü")

    .setThumbnail(

      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"

    )

    .setDescription(`${etiketlenenKişi} kullanıcısının

${db.fetch(`kadinTeyit.${etiketlenenKişi.id}`) || 0} kadın,

${db.fetch(`erkekTeyit.${etiketlenenKişi.id}`) || 0} erkek,

${db.fetch(`toplamTeyit.${etiketlenenKişi.id}`) || 0} toplam

kaydı var.`)

    .addField(

      `»  Bot Bağlantıları`,

      `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=1041677012676390932&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/AbvaHaCQXx):ate:`

    ) //websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz

    .setFooter(

      `${message.author.username} Tarafından İstendi.`,

      message.author.avatarURL

    );

  message.channel.send(mhelp);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["k-sayı", "teyit-sayı"],

  permLevel: 0,

};

exports.help = {

  name: "kayıt-sayı",

  description: "yardım menüsü",

  usage: "yardım",

};

