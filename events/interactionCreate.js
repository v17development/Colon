/**
 * Colon Bot
 * Event: interactionCreate
 * 
 * Dit Event wordt uitgevoerd als een interactie wordt aangemaakt door de gebruiker
 * of Discord zelf.
 */
module.exports = {
	Name: 'interactionCreate',
	async Execute(interaction, DiscordClient) {
        /**
         * Interacties
         * 
         * Vanaf nu gaat Colon luisteren naar acties waar ze iets mee kan. Dit
         * noemen we ook wel interactions.
         * 
         * 1. Kijk of de interactie wel een commando is.
         * 2. Kijk of wij de commando's hebben in onze lijst.
         */
        if(!interaction.isCommand()) return;
        if(!DiscordClient.Commands.has(interaction.commandName)) return;

        try {
            await DiscordClient.Commands.get(interaction.commandName).Execute(interaction, DiscordClient);
        } catch (catchedError) {
            await interaction.reply({ 
                content: 'Oh nee😞. Ik herken dit commando niet. Weet je zeker dat je het goed hebt getypt?',
                ephemeral: true
            });
        }  
	},
};