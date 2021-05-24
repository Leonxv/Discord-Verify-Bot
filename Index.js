const Discord = require('discord.js');
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Bot online!");
  client.user.setActivity("verify bot");
  });
 
   client.on("message", async message => {
    if(message.author.bot) return;
    
    if(message.content === "!verify"){
      message.delete();
      var member = message.mentions.members.first();
      var role = message.guild.roles.find(r => r.name === "verify");
      if (!role) return message.reply("Bitte erstelle die Rolle verify !");
      message.member.addRole(role);
      message.author.send("✅Du wurdest erfolgreich Verifiziert!✅");
    }
 
   });
    client.login();
