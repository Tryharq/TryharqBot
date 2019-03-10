const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () => {
    console.log("Turning On Bot")
    bot.user.setActivity("New Users", {type: 2}
                                 
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)


});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


