const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTYwNjk0MzczNTgzNjgzNjA0.D34VcQ.2VhCbRLHRLgvoDaHX3Yzf8y_ZUw');
