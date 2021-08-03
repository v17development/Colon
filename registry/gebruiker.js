/**
 * Colon Bot
 * Commands Registry \ link
 *
 * Commando: \me
 * Actie: Stuurt informatie over de gebruiker zelf.
 *
 * Opties: [STRING: CHOICES]
 */
module.exports = {
    Name: 'gebruiker',
    RegistryData: {
        name: 'gebruiker',
        description: 'Toon informatie over een gebruiker binnen de Discord-server!',
        options: [{
                name: 'gebruiker',
                type: 'USER',
                description: 'De gebruiker waar je informatie over wilt zien.',
                required: false,
            }]
    }
};