/**
 * Colon Bot
 * Action: deploy
 * 
 * Het commando dat er voor zorgt dat het "Deploy" commando wordt geregistreerd voor Elira. Vaak maar
 * eenmalig nodig. 
 * 
 * Benodigd hiervoor zijn:
 * env.GUILD_ID
 * env.GUILD_SUPER_ROLE
 */
 module.exports = {
	Name: 'hallo',
	async Execute(interaction) {
		const InteractionOption = interaction.options.getString('type');
		var OptionMessage = null;

		// Berichtentype
		if(InteractionOption === 'msg_welcome') {
			OptionMessage = "Aangenaam kennis te maken en welkom in onze Server! Ben je al lid van ons forum https://devnl.nl?";
		}else if(InteractionOption === 'msg_forum'){
			OptionMessage = "Kan je deze vraag niet beter stellen op https://devnl.nl?";
		}else{
			OptionMessage = "Zo kom je bij DevNL! <https://ri.devnl.nl>";
		}

		// Verstuur bericht
        const Message = `**Hallo👋!** ${OptionMessage}`;
        interaction.reply(Message);
	},
};