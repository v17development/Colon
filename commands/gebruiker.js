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

        // Haal rollen op en maak een string.
        const GuildMemberRoles = GuildCacheUser._roles;
        const RoleArray = [];

        for(const GuildRole of GuildMemberRoles) {
            const RoleInformation = interaction.guild.roles.cache.get(GuildRole);
            RoleArray.push(RoleInformation.name);
        }

        // Zet Moment Locale.
        moment.locale("nl");  

        // Snowflake Calculator.
        var timestampFromSnowflake = (id) => {
            return (id / 4194304) + 1420070400000;
        };

        console.log(GuildCacheUser);

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
                    name: `Discord-rollen (${GuildMemberRoles.length})`,
                    value: RoleArray.join(", "),
                    inline: false,
                },
                {
                    name: 'DevNL-serverlid sinds',
                    value: moment(GuildCacheUser.joinedTimestamp).format('LLL'),
                    inline: true,
                },
                {
                    name: 'Discord-lid sinds',
                    value: moment(timestampFromSnowflake(InteractionUser.id)).format("LLL"),
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