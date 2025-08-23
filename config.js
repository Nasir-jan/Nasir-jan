
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61VW46jRhTdS/3aGvM2WGopvG38aDB+NI7yUYbClIGChsI2HnkHWUD+ssUsIcLtzow0k5mOFL6KquLcc+499/IZkALXaIpaMPoMygqfIEXdkrYlAiOgNXGMKtAHEaQQjMB6YRkRw3MNTcKiGC79eB7wKQ7ngShde3NrZ8gtuTbami+ewK0Pymaf4fAHgFdey6eJvAs0vyBW5jjeS8aqqbgVnqd7u25YPasGjqdUa/MJ3DpEiCtMDmaZoBxVMJui1oW4+hj916m0Lcb1Ino2IPZl176u1iVjQXElyC1LdtFlNV9PuYJlDh+jr1dc3Sh1uysooztpOzvKqhVvc9lImROJ2uR1Gu1F6i4OD/o1PhAUTSJEKKbth/M+sa+sB8OzV4u7V1nB4+02S4eLGXGCaHXZxC92kzr1PtDH848R55RUZDRzuVkkZ0PYuNP5VvecI5GUWXqVchFq01fE9ywfn78m7lbvXkn/S94n2syA+ynxZIsOjFWaTKU4F61LhNOddLngxXS7QSd60az1x+g3QuPuiIi4q305maYnz/TzpjleuYhljbFqxKxXVwmZTHTmC31Im+pHLKMNn7lzP5m/OJYzzpRlOT5cEue87hnXWA6bSfzCJAjZHN2/+rY93jjjiF8MORLw/Kq2ysm5tsm2HoesaPuh5wbOsD2en+6KUtROIjBib31QoQOuaQUpLki3x7FKH8Do5KOwQvSeXrBUX/NeunFtOlhSHy8qaWtF8vOKhM/Mlhu3cbuyw8B20bx+An1QVkWI6hpFY1zTomrnqK7hAdVg9Ou9Up3oCuUFRQ6OwAgoHM8JMicqjCT8Un86J5DWsCw/EURBH8RVkc8RGNGqQX1w/8BQWNUSLFkQRImXDF3VFYHTFFNjLE03BK6TmL8FXeEc1RTmJRixQ1FUWIUTpFv//+FhcpzGGbJhDNUhI8uyILAcp8uMxKhDnWGkn/BQbr/1AUEX+ubjLvs82wcxrmq6Jk2ZFTB6N/n7IQzDoiHUb0modwtUgdFX24hSTA51p6whsAoTfEJ6pwOMYpjV6J+CowpF71oeQ0wvos6H/MY0lqvABh33Duib3Iw45dv0ZPdrrMKwoqjw4lCQeVbqbnYHfUBgBwb++vOP37usPPh28BGiEGd1N77cfMUlgtfrwfTiBYHqq+pUVTtLvet775s3X8ZndU2LQDd3QrByCfb5nepwmGdncCtv2kM42ZxcKRvIR+Z7IJ2slXPiRLK3LvR05jRquua6si9yPBfd2bHSvEDc9fxLKaLBs69HZjEd1/UQs97UEf3cXl7IduqkKZ94JNrPFrKSr1+Mw1MXLUInHKKvgwk+p61f2GYfCmYzeLZnSvGaq/Gg6AW+iZ4zab5ta65ap06xEHiL9I5yIKOheRyyvU1cotx6MSzqt1GQHbE1gYl1uCTeW0ffJ0r2mOT40Wv4/hpjdB+MjxL8tJJvxDvDMbf+VxiPUfsv40p7kVVrBm01sZFtXkUhpZynRwVVfC47WWEx1q39tVfGg4kCbp3zywzSuKhyMAKQRFVx90lVNJ2DJyQufvSjUycT7aE8gzVVv3TFdxqNV95uuVVRjmGddCZfKjte6SzeqmXpU0jfmwyo3TMbbsDtb5ok3FePCAAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
