const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('hi');
  	}
});
client.login('NTYwNjk0MzczNTgzNjgzNjA0.D34DBg.8U3gRTGzVawh7Qs1Px70hWc3i9M');
