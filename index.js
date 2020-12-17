const discord = require("discord.js");
const client = new discord.Client();
const { token, prefix, bannedword } = require("./config.json");
const keep_alive = require('./keep_alive.js');
client.on("ready", () => {
console.log("I am ready to delete banned words!");
client.user.setActivity("Watching for banned words!");
});
require('events').EventEmitter.defaultMaxListeners = 100;
client.on('message', message => {
if(message.content.includes("shit")) { 
  message.delete({timeout: 0});
  message.channel.send(`${message.member} Watch Your Language`)
}});
client.on('message', message => {
if(message.content.includes("fuck")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});
client.on('message', message => {
if(message.content.includes("yourword")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});

client.on('message', message => {
if(message.content.includes("asshat")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});client.on('message', message => {
if(message.content.includes("fucker")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});
client.on('message', message => {
if(message.content.includes("nig")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});

client.on('message', message => {
if(message.content.includes("your word")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});
client.on('message', message => {
if(message.content.includes("your word")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});

client.on('message', message => {
if(message.content.includes("whore")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});
client.on('message', message => {
if(message.content.includes("yourword")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});

client.on('message', message => {
if(message.content.includes("yourword")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});
client.on('message', message => {
if(message.content.includes("prick")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});
client.on('message', message => {
if(message.content.includes("your word")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});
client.on('message', message => {
if(message.content.includes("your word")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language`);
}});
client.on('message', message => {
if(message.content.includes("your word")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language. And don't say that wor'd`);
}});
client.on('message', message => {
if(message.content.includes("your word")) { 
  message.delete({timeout: 0});
 message.channel.send(`${message.member} Watch Your Language. And don't say that word.`);
}});







client.login(token);
