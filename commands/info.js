/**
 * Colon Bot
 * Command: info
 *
 * Het info commando toont informatie over de Discord-server van DevNL.
 */
module.exports = {
    Name: 'info',
    async Execute(interaction, DiscordClient) {

        // Aan Discord laten weten dat we langer als x seconde nodig hebben om een resultaat terug te geven.
        // Colon zou na 15 minuten (normaliter 3 seconden) stoppen met 'denken'.
        await interaction.defer();

        // Embed die we tonen in de server met de informatie uit de InteractionUser.
        // Gepersonaliseerd op de gebruiker met zijn of haar data.
        const infoEmbed = {
            color: 0xe74c3c,
            title: `Informatie over ${interaction.guild.name}`,
            thumbnail: {
                url: 'https://www.devnl.nl/assets/logo-zczh01tk.png',
            },
            description: 'DevNL is een Nederlandstalige community gericht op developers. Een jonge community vol ideeen, creativiteit en inspanning. DevNL biedt de leden de mogelijkheid om vragen te stellen, tutorials te schrijven of om showcases over hun projecten bij te houden voor andere leden.',
            fields: [
                {
                    name: 'Server-eigenaar',
                    value: `eigenaar`,
                },
                {
                    name: 'Aantal Discord-leden ',
                    value: `**${interaction.guild.members.cache.filter(member => !member.user.value).size}** leden`,
                },
                {
                    name: 'Aantal Discord-bots',
                    value: `**${interaction.guild.members.cache.filter(member => !member.user.bot).size}** bots`,
                }
            ],
            timestamp: new Date(),
            footer: {
                text: 'Colon',
                icon_url: 'https://i.imgur.com/XCR2lnU.png',
            },
        };

        // Verstuur het bericht inclusief de embed.
        interaction.editReply({content: `Hallo ${interaction.member} 👋, bij deze de opgevraagde informatie!`, embeds: [infoEmbed]});
    },
};