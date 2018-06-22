angular.module('nibs.config', [])

    .constant('SERVER_URL', null)

    .constant('HOST', 'https: //demo-loyalty-generic.herokuapp.com/')

    .constant('FB_APP_ID', '180938355946407')

    .constant('STATUS_LABELS', [
        'Principiante',
        'Esperto',
        'Pilota'
    ])

    .constant('STATUS_DESCRIPTIONS', [
        'Principiante (Beginner) Hai bisogno ancora di un P dietro la tua auto, non ti preoccupare ti insegniamo noi ad essere un vero pilota',
        'Esperto (Intermediate) Ti manca poco per diventare un vero pilota, per adesso ti riteniamo un esperto sei pronto per il corso di guida sportiva ',
        'Pilota (Super Power) semplicemente perfetto! Sei uno dei nostri top clienti, ora dimostraci di essere il numero uno '
    ]);
