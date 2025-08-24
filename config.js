
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61V246qSBT9l3rVHLk3mHQyiCAqqHhDezIPBRRYCgVdFCie+AfzAfM2vzifMMHuntPJOdOnJxmeiqpi7bX3XnvxFZAcl2iKGtD/CgqKa8hQu2RNgUAfDKo4RhR0QQQZBH3gzst1tZtFSbAQhlra82gRLV3XnMVbKwrzaRbMrnDbjAJbegS3LiiqIMXhB4CclfFuOguZJqn4amx3RaCHxpGNzroCJXwluUSdSryEB/MR3FpEiCkmiVkcUIYoTKeoWUBMP0efm2TlWXBRAKWeX24nZB/M6RPq+LsDGkjeoGgMnG+CqsPtP0ffID28X60ddTO5bkzBFdUrzGk9HoRRplgdz8DQ5uFFXZ7CF/olTgiKxhEiDLPm03VH8+PgGVEnr6PVAc9caPtr8iBL0sHl9dDhdWkSm8GMoFPyOeKKtjgNOvrm5FzU4z4/Ytcplcl5YxXiWlwHUhRrRGmO/uXivie+oG9aOf2Xumc2m9pCWD4H88t5PyTneuYuot7w7AYxh56zTvYUkrBT27tPysapaycT/XyWGMTc4J5mGugUyerWfzY3wkj35vHzVZ7xzlb9Rh+yin7EcjpYCeE1dZ74ld3ZT8zpECmh0vG589HMPal3tVbRsx+Zh6QhvfnRkozLYil5viBMr6ktT/3DfHbpzOYHuOxxzTiYWHJ08B7vGZ1QM45An791AUUJLhmFDOfkvsdLXQCjeoVCiti9vGC4VT1Xm3v74fh0Sv262Yy3xnRIWDaI7KXgY8g2p+B54WLuEXRBQfMQlSWKbFyynDYuKkuYoBL0f713qk2aoixnaIIj0AeaIAqSKsgap0i/lF/OB8hKWBRfCGKgC2KaZy4CfUYr1AX3D1Re5DVO1hTBknRVMi3VGjwoAqfJPCfrotKmmL0EXeMMlQxmBejzD7LCcZyoibfu/8ODUzVDNjTTMk1NM4YKr2qmovOaZJmmoYr8T3iot9+6gKALe9FxW32R74IY05JtSFWkOYzeRP52CMMwrwhbNSQ02gWioP9uGzGGSVK2mVUE0vCAa2S0eYB+DNMS/dNwRFH0lsuriRl51OpQ3bsDeyd7oOXeAn1Xm74ofF+e9H6N1zheljVRfpBUkVfam+1BFxDYgoG//vzj97Yqr3xb+AgxiNOyta9FsxYOkqfNjeLi7ff6Stenut5K6i2/t7l50WV81jcs3xvmk7RfLwheiU/6RMAi70Bf3TZJON7WCyXtqUfuRyCgD3aUcp3amAqePVpW2UbxTzLarvfe7LQwzjvnLGtYV2bYSkZ2HUgrldjjwAlK8oTDOoYLPx/kvYQX/ERVm+vD3hzGWD8/ttEiVOMQvQ92zDKuWsiHAOoVxybzywiFkc2ySz1FzYw6bjRaTBVFmknrCmcsL/FwGY705WhJolXWm8/J8NRrTD9wdbLeeWuHX26S5GWi746Svjo5fp01fH+NMbob42sLftrJF+Kt4Lhb9x3Gq9X+i10NdqpuOXCkH0ZoZF5l6cQEz4hypq2EtLbC3Das4Nop4t5YA7dW+UUKWZzTDPQBJBHN7zqhedUqeEzi/KMfnT4eD169LIUl079NxQ8GTX14ubWgeWHD8gD6QFxqT6LWSrzRi2LFIHsbMqC3z1A7gdvfM0x27o8IAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
