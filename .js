let prefix = '$'
client.on('message', message => {
    if (message.content === 'prefix' + 'Hi') {
    	message.reply('Hello');
  	}
});
