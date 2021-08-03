/**
 * Colon Bot
 * Commands Registry \ welkom
 * 
 * Commando: \welkom
 * Actie: Stuurt een bericht met de DevNL link of heel soms
 * een leuke Rickroll. Waarom niet?!
 * 
 * Opties: [STRING: CHOICES, USER: USER]
 */
module.exports = {
	Name: 'welkom',
	RegistryData: {
        name: 'welkom',
        description: 'Stuur een DevNL linkje voor iemand!',
        options: [{
            name: 'type',
            type: 'STRING',
            description: 'Het type bericht dat je wil sturen',
            required: true,
            choices: [
                {
                    name: 'Welkom',
                    value: 'msg_welcome'
                },
                {
                    name: 'Forum',
                    value: 'msg_forum'
                },
                {
                    name: 'Rick',
                    value: 'msg_rick'
                }
            ],
        },
        {
            name: 'gebruiker',
            type: 'USER',
            description: 'De gebruiker die je dit bericht wil sturen',
            required: false,
        }]
    }
};