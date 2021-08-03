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

        // Aan Discord laten weten dat we langer als x seconde nodig hebben om een resultaat terug te geven.
        // Colon zou na 15 minuten (normaliter 3 seconden) stoppen met 'denken'.
        await interaction.defer();

        // Tonen welke data er in de InteractionUser zit in de console.
        console.log(await DiscordClient.users.fetch(InteractionUser.id));

        // Embed die we tonen in de server met de informatie uit de InteractionUser.
        // Gepersonaliseerd op de gebruiker met zijn of haar data.
        const userEmbed = {
            color: 0xe84393,
            title: InteractionUser.username,
            thumbnail: {
                url: InteractionUser.displayAvatarURL(),
            },
            fields: [
                {
                    name: 'id',
                    value: InteractionUser.id,
                },
                {
                    name: 'discriminator',
                    value: InteractionUser.discriminator,
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