/**
 * Colon Bot
 * Event: messageCreate
 * 
 * Dit Event wordt uitgevoerd als een bericht wordt aangemaakt.
 */
module.exports = {
	Name: 'messageCreate',
	async Execute(message, DiscordClient) {
        /**
         * Acties
         * 
         * Kijk of het gaat om een actie en zo ja, voer de actie uit.
         */
        if(message.content.toLowerCase().startsWith(process.env.ACTION_PREFIX)) {
            const RequestedAction = message.content.toLowerCase().replace(process.env.ACTION_PREFIX, '').replace(/ .*/, '');
            if(!DiscordClient.Actions.has(RequestedAction)) return;

            try {
                await DiscordClient.Actions.get(RequestedAction).Execute(RequestedAction);
            } catch (catchedError) {
                console.log(`Actie ${RequestedAction} mislukt: ${catchedError}`);
            }  
        }
	},
};