/**
 * Colon Bot
 * Command: link
 * 
 * Het Link Commando verwelkomt leden. Tenminste, als het getypt wordt. Het stuurt ook een
 * DevNL linkje of heel af en toe toch een rickroll..
 */
 module.exports = {
	Name: 'hallo',
	Execute(interaction) {
		const InteractionOption = interaction.options.getString('type');
		const OptionMessage;

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