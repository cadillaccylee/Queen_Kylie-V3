const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
╔═❤️══════║👸║══════❤️═╗
   *${settings.botName || '❤️👸QUEEN_KYLIE-V3 👸❤️'}*  
   *Version*: *${settings.version || '1.0.0'}*
   *Developer*: ${settings.botOwner || '*Cadillac Cylee ❤️🧸*'}
   YT : ${global.ytch}
╚═══════════════════╝

❤️👸𝗞𝗬𝗟𝗜𝗘_𝗠𝗘𝗡𝗨👸❤️

╔═══════════════════
║❤️👸𝗕𝗢𝗧_𝗠𝗘𝗡𝗨👸❤️
║ ➤ .help 
║ ➤ .menu 
║ ➤ .ping
║ ➤ .alive
║ ➤ .tts <text>
║ ➤ .owner
║ ➤ .joke
║ ➤ .quote
║ ➤ .fact
║ ➤ .weather <city>
║ ➤ .news
║ ➤ .attp <text>
║ ➤ .lyrics <song_title>
║ ➤ .8ball <question>
║ ➤ .groupinfo
║ ➤ .staff or .admins 
║ ➤ .vv
╚═══════════════════╝

╔═══════════════════╗
║❤️👸𝗜𝗠𝗔𝗚𝗘/𝗦𝗧𝗜𝗖𝗞𝗘𝗥👸❤️
║ ➤ .blur <image>
║ ➤ .simage <reply to sticker>
║ ➤ .sticker <reply to image>
║ ➤ .meme
║ ➤ .take <packname> 
║ ➤ .emojimix <emj1>+<emj2>
╚═══════════════════╝   

╔═══════════════════╗
║❤️👸𝗚𝗥𝗢𝗨𝗣👸❤️
║ ➤ .ban @user
║ ➤ .promote @user
║ ➤ .demote @user
║ ➤ .mute <minutes>
║ ➤ .unmute
║ ➤ .delete or .del
║ ➤ .kick @user
║ ➤ .warnings @user
║ ➤ .warn @user
║ ➤ .antilink
║ ➤ .antibadword
║ ➤ .clear
║ ➤ .tag <message>
║ ➤ .tagall
║ ➤ .chatbot
║ ➤ .resetlink
╚═══════════════════╝

╔═══════════════════╗
║❤️👸𝗢𝗪𝗡𝗘𝗥👸❤️
║ ➤ .mode
║ ➤ .autostatus
║ ➤ .clearsession
╚═══════════════════╝

╔═══════════════════╗
║❤️👸𝗚𝗜𝗧𝗛𝗨𝗕👸❤️
║ ➤ .git
║ ➤ .github
║ ➤ .sc
║ ➤ .script
║ ➤ .repo
╚═══════════════════╝

╔═══════════════════╗
║❤️👸𝗚𝗔𝗠𝗘👸❤️
║ ➤ .tictactoe @user
║ ➤ .hangman
║ ➤ .guess <letter>
║ ➤ .trivia
║ ➤ .answer <answer>
║ ➤ .truth
║ ➤ .dare
╚═══════════════════╝

╔═══════════════════╗
║❤️👸𝗙𝗨𝗡👸❤️
║ ➤ .compliment @user
║ ➤ .insult @user
║ ➤ .flirt 
║ ➤ .character @user
║ ➤ .wasted @user
║ ➤ .ship @user
╚═══════════════════╝

╔═══════════════════╗
❤️👸𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥👸❤️
║ ➤ .play <song_name>
║ ➤ .song <song_name>
╚═══════════════════╝

𝗠𝙖𝙙𝙚 𝙬𝙞𝙩𝙝 𝙇𝙤𝙫𝙚 𝙗𝙮 𝘾𝙖𝙙𝙞𝙡𝙡𝙖𝙘 𝘾𝙮𝙡𝙚𝙚 :👸❤️`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Queen_Kylie-V3',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Queen_Kylie-V3',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
