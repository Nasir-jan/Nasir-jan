
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA5VU27KiOBT9l7xqtdwVqk7VIN5QURAVdaofIgQJQsKBIGCX/96F9unuh5meMzyFJLX32uuSb4BQXKAFaoD2DWQ5vkGG2iVrMgQ0MCzDEOWgCwLIINCAOfXMxW4yQuFsESfB2GDvW8vGK5adgyEtBp59Ks4jU+oR8w08uiArzwn2/1CwF1aKERiE93mBbeark72laZp7TZGrUmNvTspyhNWV3njVG3i0FSHOMbmMswilKIfJAjU2xPnn4Hv6CPOwlI7WTIlHdbVcTQeH02aW9++0OuSUI9b2nQu5CT/+HHxLGvJ6313uNtf12JEWDR4Q/X2gNkFNLC+3Iy6ssholQnJ9wS/whaDADBBhmDWf5v1qyUNcpFl8Tu+HPp/N3fhA1dCDq/khmPKDXQFLzu7LKed/EvhI8E7ecVP1o36kLM2VThHHAq+I3tWdnXJpLCgolfFqtPsduJ1/eOX6f3hPhyzbd5KD4hDLRz05uW+Em1AWxHXg6mItZDW0WWjANbf7HPymXA3leF5GI56b9i/VpF5BXbmwfOxnruGteyWdy4zO7vfqF3zIyvxPKPdbEXOSRaBQzfZWPFrclsL+WN6CbbKuaiFOS2Mkk9ToOG7orXtJWTr2WeSMXSfaZM12qhSbpXEv5Rly+qTW6/lSukSXt+dEV9SYAdD4Rxfk6IILlkOGKWn3BF7oAhjcXOTniD3pBWspQaxKx34WMJVe3XBHZ7vF6LBAa+YsLlJtzh2yn9yLTH8DXZDl1EdFgYIZLhjNGwsVBbygAmh/f+0Cgmr2Eq5tJ/JdEOK8YDtSZgmFwYeqH4fQ92lJmNsQ32gXKAca92sbMYbJpWh5LAnM/QjfkBFBVgAthEmBfk6IchQAjeUl+plagwYt8VORny2Xow3ogvQpCA6ABlRBFKSBIKucImmi9FfxpWrLwiz7QhADXZA8r/Eqx8uyKsp9aSDySnuzPXj8RNgWDBCDOCmABgxb2QqR5PQCKNTO8ai7ur7Qn6x9TPRhjRf1YaXvGD0a45N03NoEu+JJnwtY5JfQG+ybi2/ub7aS9AYx909FgAZYedDP7/GyidPidlyxRCTMJaSWJGgkEifDtTOwg5AGJ1Ybpl8e+hdzw+bWweduYhN3tkpfHst+GcG+w9a9MJD6yGh91AUBumEf/d5sknBOIiTy1dhZ1WjMXGauKfIONI0aNbzVzKfXy/597YxjyDzufX2PYuOsW6e4Y1wt7MKGVZZUHso6TfYhT3OUdiL9ZdpnaJIfjxV+2qnVqv0NMXpmn8BWwf/W7gW8tRj36P5W48dr8i+JHB4G+mQJp3o0RdPxXZauTHCMgDLVFZLbxKczY3K+d7KwZ6rg8fjaBVkCWUjzFGgAkiCnOABdkNOy9axJQvqHZoZumkPnNXkCC6b/ysEWp6hgMM2AxvdlReAFnhu8btk5zWawiIAGxI16EtXW1I2eZS6D7CNWQG+/+bUGj+/TM7/LcgcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
