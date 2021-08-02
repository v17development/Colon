/**
 * Colon Bot
 * 
 * Ik ben DevNL's Discord Ontwikkelaars Butler. Ik sta paraat voor forum interactie, handige
 * ontwikkelaarstools maar ook simpele rol en moderatietools. Ik ben gemaakt voor DevNL.
 * 
 * @author V17 Development
 * @copyright V17 Development (C) 2021 - All Rights Reserved
 */

/** Configuration and Imports */
const { Client, Intents, Collection } = require('discord.js');
const DotEnv = require('dotenv');
const FileSystem = require('fs');

// Environment Variables
DotEnv.config();

// Defineer bestandsmappen
const EventFiles = FileSystem.readdirSync('./events').filter(file => file.endsWith('.js'));
const CommandFiles = FileSystem.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Intents
var DiscordIntents = [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
];

/** 
 * Klaarstomen
 * 
 * Colon doet nog even haar make-up op en meldt zich zodra ze klaar
 * voor de start is.
 */
const DiscordClient = new Client({ intents: DiscordIntents})
DiscordClient.Commands = new Collection();

// Bouw een collectie met commando's
for (const File of CommandFiles) {
    const Command = require(`./commands/${File}`);
    Client.Commands.Set(Command.Name, Command);
}

DiscordClient.once('ready', () => {
    console.log('Colon Started');
});

/**
 * Events
 * 
 * Vanaf nu gaat Colon luisteren naar acties waar ze iets mee kan. Dit
 * noemen we ook wel events. Events werken dan weer met interactions.
 */
for (const File of EventFiles) {
    const TriggerEvent = require(`./events/${File}`);

    if(TriggerEvent.once) {
        DiscordClient.once(TriggerEvent.Name, (...args) => TriggerEvent.Execute(...args, DiscordClient));
    }else{
        DiscordClient.on(TriggerEvent.Name, (...args) => TriggerEvent.Execute(...args, DiscordClient));
    }
}

/**
 * Inloggen
 * 
 * Colon logt zich nu in op Discord. We zijn er klaar voor!
 */
DiscordClient.login(process.env.DISCORD_TOKEN);