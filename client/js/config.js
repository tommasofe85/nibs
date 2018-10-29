angular.module('nibs.config', [])

    .constant('SERVER_URL', null)

    .constant('HOST', 'https: //demo-loyalty-generic.herokuapp.com/')

    .constant('FB_APP_ID', '180938355946407')

    .constant('STATUS_LABELS', [
        'Formula 3 pilot',
        'Formula 2 pilot',
        'Formula 1 pilot'
    ])

    .constant('STATUS_DESCRIPTIONS', [
        'Formula 3 pilot (Beginner) Bravo! stai iniziando a fare giri veloci, la strada per la Formula 1 è appena iniziata',
        'Formula 2 pilot (Intermediate) Sei in gran forma! Hai gli occhi dei top team addosso ',
        'Fomula 1 pilot(Super Power) Semplicemente perfetto! WOW! Professionista! '
    ]);
