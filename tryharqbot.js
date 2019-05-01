const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')

   }
}) 

var bot = new Discord.Client();

bot.on("guildMemberAdd", member => {
    let mem = member.guild
    mem.defaultChannel.sendMessage(member.user + " welcome to the server!"); 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
