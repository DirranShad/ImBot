const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'MzAyNDM4NTU1NjU2MTI2NDY1.C9NgMg.qMbLxg4DlczEuOukDvZ-m-6s0BQ';
const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res){
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8000);

console.log("Server running at http://127.0.0.1:8000/");

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  if (message.content === 'ping') {
    message.channel.sendMessage('pong');
  }
  else if (message.content === '') {

  }





















});

bot.login(token);