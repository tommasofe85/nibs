angular.module('nibs.config', [])

    .constant('SERVER_URL', null)

    .constant('HOST', 'https: //demo-loyalty-generic.herokuapp.com/')

    .constant('FB_APP_ID', '180938355946407')

    .constant('STATUS_LABELS', [
        'Bio Bronze',
        'Bio Silver',
        'Bio Gold'
    ])

    .constant('STATUS_DESCRIPTIONS', [
        'Bio Bronze (Beginner) Bravo! stai iniziando a provare i prodotti BIO sei nella buona strada per migliorare la tua salute',
        'Bio Silver (Intermediate) Sei in gran forma! Ti manca poco per diventare un vero Bio Expert ',
        'Bio Gold (Super Power) Semplicemente perfetto! WOW! '
    ]);
