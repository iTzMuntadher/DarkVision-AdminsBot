const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '$'

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === prefix + 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'prefix' + 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

// THIS  MUST  BE  THIS  WAY
client.login('NTYwNjk0MzczNTgzNjgzNjA0.D34DBg.8U3gRTGzVawh7Qs1Px70hWc3i9M');
