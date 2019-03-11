const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!youtube') {
    	message.reply('https://www.youtube.com/channel/UCfYEE7bJlDfZSlOQYfu3ksA?view_as=subscriber');
  	}
});

client.on('message', message => {
    if (message.content === '!staff') {
    	message.reply('Owner tryharq_ & BASplayer4');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
