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

║**»** **${prefix}erkek-rol @Rol ** : Erkek Rolünü Ayarlar.

║**»** **${prefix}kız-rol @Rol ** : Kız Rolünü Ayarlar.

║**»** **${prefix}alınacak-rol @Rol ** : Kayıtsız Rolünü Ayarlar + Ayarlandıktan Sonra Oto Rol Verir.

║**»** **${prefix}kayıt-yetkili @Rol ** : Kayıt Yetkilisini Ayarlar.

║**»** **${prefix}kayıt-kanal #Kanal ** : Kayıt Yapılacak Kanalı Ayarlar.

║**»** **${prefix}kayıttag (tag) ** : Tagı Ayarlar.

║**»** **${prefix}e (İsim) (Yaş) ** : Erkek Kayıt Yapar.

║**»** **${prefix}k (İsim) (Yaş) ** : Kız Kayıt Yapar.

║

╚════════════════════════════════════╝

`

    )

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

  aliases: ["y-k", "yardim-kayit", "h-r", "help-register"],

  permLevel: 0,

};

exports.help = {

  name: "yardım-kayıt",

  description: "yardım menüsü",

  usage: "yardım",

};

