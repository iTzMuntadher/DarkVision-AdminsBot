var prefix = '$'
client.on('message', message => {
    if (message.content === 'prefix' + 'hi') {
    	message.reply('Hello');
  	}
});
