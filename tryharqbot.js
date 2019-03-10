const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd",Member => 
          vare role = member.guild.role.find ("name", "Bezoeker");
member.addrole (role)
  
})

claint.on ("GuildMemberRemove,member" => {
  
})
  

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
