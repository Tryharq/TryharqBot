const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity('tryharqbot')
});

client.on("GuildMemberAdd".function(message) {

  let guild = message.guild;
  let member = message;
  let membercounter = client.users.size;
          
  const embed = new discord.RichEmed()
  .setcolor(0xffffff)
  .setTitle('Tryharq_ & Basplayer Community - welcome')
  .setdescription('hallo ${member.user}, welkom op Tryharq_ & Basplayer Community.')
  .setThumbnail(member.user.avatarURL)
  .setfooter(footer)

  member.guild.channels.find('name','welcome').send({ embed: embed }):
});
          
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
