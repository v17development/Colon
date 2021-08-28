const moment = require("moment");

/**
 * Colon Bot
 * Command: gebruiker
 *
 * Het Gebruiker commando toont informatie over de gebruiker zelf of een gekozen gebruiker
 * uit de server van DevNL.
 */
module.exports = {
    Name: 'gebruiker',
    async Execute(interaction, DiscordClient) {
        const InteractionUser = interaction.options.getUser('gebruiker');
        const GuildCacheUser = interaction.guild.members.cache.get(InteractionUser.id);

        // Aan Discord laten weten dat we langer als x seconde nodig hebben om een resultaat terug te geven.
        // Colon zou na 15 minuten (normaliter 3 seconden) stoppen met 'denken'.
        await interaction.defer();

        // Tonen welke data er in de InteractionUser zit in de console.
        console.log(await GuildCacheUser);

        // Zet Moment Locale.
        moment.locale("nl");  

        // Embed die we tonen in de server met de informatie uit de InteractionUser.
        // Gepersonaliseerd op de gebruiker met zijn of haar data.
        const userEmbed = {
            color: 0xe74c3c,
            author: {
                name: InteractionUser.username,
                icon_url: InteractionUser.displayAvatarURL(),
            },
            thumbnail: {
                url: InteractionUser.displayAvatarURL(),
            },
            fields: [
                {
                    name: 'Over ' + InteractionUser.username,
                    value: 'De over mij van de gebruiker (indien beschikbaar)',
                    inline: false,
                },
                {
                    name: 'Status',
                    value: 'status',
                    inline: false,
                },
                {
                    name: 'Discord-rollen',
                    value: 'Rol 1 | Rol 2 | Rol 3',
                    inline: false,
                },
                {
                    name: 'DevNL-account',
                    value: '[Mitchel](https://www.devnl.nl/u/Mitchel) anders: Gebruiker heeft geen account op DevNL.',
                    inline: false,
                },
                {
                    name: 'Discord-server-lid sinds',
                    value: moment(GuildCacheUser.JoinedAt).format('LLL'),
                    inline: true,
                },
                {
                    name: 'Discord-lid sinds',
                    value: 'datum',
                    inline: true,
                }
            ],
            timestamp: new Date(),
            footer: {
                text: 'Colon',
                icon_url: 'https://i.imgur.com/XCR2lnU.png',
            },
            description: 'Hieronder tonen we de informatie over **' + InteractionUser.username + '** dat bij ons bekend is.',
        };

        // Verstuur het bericht inclusief de embed.
        interaction.editReply({content: `Hallo ${interaction.member} 👋, bij deze de opgevraagde informatie!`, embeds: [userEmbed]});
    },
};