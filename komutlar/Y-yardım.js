const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

exports.run = (client, message) => {
  var prefix = ayarlar.prefix;

  const mhelp = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .setAuthor(`${client.user.username} `, client.user.avatarURL)

    .setTitle("Weyss Bot | Yardım Menüsü")

    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )

    .setDescription(
      `

╔════════════════════════════════════╗

║**»** **${prefix}yardım-moderasyon** : Moderasyon Komutlarını Gösterir.

║**»** **${prefix}yardım-kullanıcı** : Kullanıcı Komutlarını Gösterir.

║**»** **${prefix}yardım-guard** : Koruma Komutlarını Gösterir.

║**»** **${prefix}yardım-eğlence** : Eğlence Komutlarını Gösterir.

║**»** **${prefix}yardım-botlist** : Botlist Komutlarını Gösterir.

║**»** **${prefix}yardım-kayıt** : Erkek-Kız Kayıt Komutlarını Gösterir.

║**»** **${prefix}yardım-level** : Level Sistem Komutlarını Gösterir.

║

╚════════════════════════════════════╝

`
    )

    .addField(
      `»  Bot Bağlantıları`,
      `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=1041677012676390932&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/AbvaHaCQXx) :ate:`
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

  aliases: ["y", "yardım", "h", "help"],

  permLevel: 0,
};

exports.help = {
  name: "yardim",

  description: "yardım menüsü",

  usage: "yardım",
};
