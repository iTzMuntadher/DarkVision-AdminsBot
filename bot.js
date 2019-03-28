const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '$'

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '$avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
if (message.content.startsWith(prefix + 'ping')){
message.channel.sendmessage('pong');
}
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTYwNjk0MzczNTgzNjgzNjA0.D34VcQ.2VhCbRLHRLgvoDaHX3Yzf8y_ZUw');
