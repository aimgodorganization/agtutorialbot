const Discord = require('discord.js');
const client = new Discord.Client( { disableMentions: "all" } );
require('dotenv').config();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();

["command", "event"].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);


const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Your Bot has Started Working! Do join our Discord Server and Subscribe to our Channel for more Such Tutorials!');
});
server.listen(3000);
