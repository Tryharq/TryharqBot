const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTUzNjIyMjg5MzQ2OTg1OTk0.D2XVUA.QfkxWQbOs26ih0bPS23c7U_lFao);
