const Discord = require("discord.js");

const moment = require("moment");

const os = require("os");

require("moment-duration-format");

exports.run = async (client, message, args) => {

  const duration = moment

    .duration(client.uptime)

    .format(" D [gün], H [saat], m [dakika], s [saniye]");

  let aylartoplam = {

    "01": "Ocak",

    "02": "Şubat",

    "03": "Mart",

    "04": "Nisan",

    "05": "Mayıs",

    "06": "Haziran",

    "07": "Temmuz",

    "08": "Ağustos",

    "09": "Eylül",

    10: "Ekim",

    11: "Kasım",

    12: "Aralık",

  };

  let aylar = aylartoplam;

  let s = `${moment(client.user.createdAt).format("DD")} ${

    aylar[moment(client.user.createdAt).format("MM")]

  } ${moment(client.user.createdAt).format("YYYY HH:mm:ss")}`;

  const msg = new Discord.MessageEmbed()

    .setColor("")

    .setFooter(client.user.tag, client.user.avatarURL())

    .setThumbnail(client.user.avatarURL())

    .setTitle(`Weyss Bot İstatistik`)

    .addField(

      "**Botun Ana Sahibi:**",

      "<@1033399308147499099> | や JustMoon ★#9991 ",

      false

    )

    .addField(

      "**Hizmet Verdiği Kullanıcı Sayısı:**",

      client.guilds.cache

        .reduce((a, b) => a + b.memberCount, 0)

        .toLocaleString(),

      false

    )

    .addField(

      "**Hizmet Verdiği Sunucu Sayısı:**",

      client.guilds.cache.size.toLocaleString(),

      false

    )

    .addField(

      "**Hizmet Verdiği Kanal Sayısı:**",

      client.channels.cache.size.toLocaleString(),

      false

    )

    .addField("**Botun Discord.JS sürüm:**", "v" + Discord.version, false)

    .addField("**Botun Node.JS sürüm:**", `${process.version}`, false)

    .addField("**Ping:**", client.ws.ping + " ms", false)

    .addField("**Botun Açık Olduğu Süre**", duration)

    .addField("**Botun Kuruluş Tarihi**", s);

  return message.channel.send(msg);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["i"],

  permLevel: 0,

};

exports.help = {

  name: "istatistik",

  description: "Bot i",

  usage: "istatistik",

};

