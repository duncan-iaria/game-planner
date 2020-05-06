const Discord = require("discord.js");
const { token } = require("./auth.json");

const bot = new Discord.Client();
const PREFIX = "!";

bot.login(token);

bot.on("ready", () => {
  console.log("bot online...");
});

bot.on("message", (message) => {
  // Scan message for the bot prefix substring, ending if not found
  if (!message.content.includes(PREFIX)) {
    return;
  }

  let args = message.content.substring(PREFIX.length).split(" ");

  // console.log("message: ", message);
  console.log(args);

  switch (args[0]) {
    case "ping":
      message.channel.send("pong!");
      break;
    case "upcoming":
      message.channel.send("This feature is upcoming...");
    default:
      break;
  }
});
