const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'MzAyNDM4NTU1NjU2MTI2NDY1.C9NgMg.qMbLxg4DlczEuOukDvZ-m-6s0BQ';

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  if (message.content === 'ping') {
    message.channel.sendMessage('pong');
  }
});

bot.login(token);