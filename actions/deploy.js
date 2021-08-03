/**
 * Colon Bot
 * Action: deploy
 * 
 * Het commando dat er voor zorgt dat commando's worden geregistreerd of aangepast bij Discord.
 * 
 * Benodigd hiervoor zijn:
 * env.GUILD_ID
 * env.GUILD_SUPER_ROLE
 */
 module.exports = {
	Name: 'deploy',
	async Execute(message, DiscordClient) {
		if(!message.member.roles.cache.has(process.env.GUILD_SUPER_ROLE)) return;
		if(!DiscordClient.Registry) return;

		for (const RegistryFile of DiscordClient.Registry) {
			const Registry = require(`../registry/${RegistryFile}`);

			try {
				await DiscordClient.guilds.cache.get(process.env.GUILD_ID)?.commands.create(Registry.RegistryData);
				console.log(`Commando ${Registry.Name} is nu geregistreerd.`);
			} catch (RegistryError) {
				console.log(`De registry kon het commando ${Registry.Name} niet registreren: ${RegistryError}.`)
			}
			
		}	
	},
};