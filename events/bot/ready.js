const { Events, ActivityType } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    run(client) {

        client.user.setActivity("?help", {type: ActivityType.Listening});
        console.log(`${client.user.username} is online !`);
    }
};