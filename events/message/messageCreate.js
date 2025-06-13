const { Events } = require("discord.js");

module.exports = {
    name: Events.MessageCreate,
    run(client, message) {
        
        const prefix = "?";

        if (!message.content.startsWith(prefix)) return;

        const arrayMessage = message.content.split(" ");
        // console.log(arrayMessage);
        // split le message en tableau et prend le premier élément
        const name = arrayMessage[0].slice(prefix.length, message.content.split(" ")[0].length);
        // console.log(name);
        const command = client.commands.get(name);
        // console.log(command);

        command.run(client, message);
    }
}