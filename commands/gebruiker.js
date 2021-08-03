/**
 * Colon Bot
 * Command: gebruiker
 *
 * Het Gebruiker commando toont informatie over de gebruiker zelf of een gekozen gebruiker
 * uit de server van DevNL.
 */
module.exports = {
    Name: 'gebruiker',
    async Execute(interaction) {
        const InteractionUser = interaction.options.getUser('gebruiker');

        // Aan Discord laten weten dat we langer als x seconde nodig hebben om een resultaat terug te geven.
        // Colon zou na 15 minuten (normaliter 3 seconden) stoppen met 'denken'.
        await interaction.defer();

        // Tonen welke data er in de InteractionUser zit in de console.
        console.log(InteractionUser);

        // Embed die we tonen in de server met de informatie uit de InteractionUser.
        // Gepersonaliseerd op de gebruiker met zijn of haar data.
        const userEmbed = {
            title: 'Gebruikersnaam',
            author: {
                name: 'Colon',
                icon_url: 'https://i.imgur.com/XCR2lnU.png',
            },
            description: 'Pascal wilt in de modder spelen met Colon.',
            content: 'Maar wilt Colon dat wel?',
        };
        interaction.editReply({embed: userEmbed});
    },
};