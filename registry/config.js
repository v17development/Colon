/**
 * Colon Bot
 * Commands Registry \ config
 * 
 * Commando: \config
 * Actie: Het belangrijke Configuratie commando.
 * 
 * Opties: [STRING: CHOICES]
 */
const RegistryData = {
    name: 'configure',
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
    }]
}