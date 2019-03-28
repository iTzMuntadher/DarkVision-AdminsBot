const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '$'

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage('pong');
	}
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTYwNjk0MzczNTgzNjgzNjA0.D34VcQ.2VhCbRLHRLgvoDaHX3Yzf8y_ZUw');
