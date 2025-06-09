const { Client, IntentsBitField, Collection } = require("discord.js");
const client = new Client({intents: new IntentsBitField(3276799)});
const loadCommands = require("./loaders/loadCommands");
const dotenv = require("dotenv");
dotenv.config();

client.commands = new Collection();

loadCommands(client);

client.on("messageCreate", message => {
    const prefix = "!";

    if (!message.content.startsWith(prefix)) return;

    // split le message en tableau et prend le premier élément
    const name = message.content.split(" ")[0].replace(prefix, "");
    // console.log(name);
    const command = client.commands.get(name);
    // console.log(command);

    command.run(client, message);

});

// node main pour démarrer le bot
client.login(process.env.TOKEN);