var prefix = '$'
client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('Hello');
  	}
});
