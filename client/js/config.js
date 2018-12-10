angular.module('nibs.config', [])

    .constant('SERVER_URL', null)

    .constant('HOST', 'https: //demo-loyalty-generic.herokuapp.com/')

    .constant('FB_APP_ID', '180938355946407')

    .constant('STATUS_LABELS', [
        'Burger',
        'Double Burger',
        'Triple Burger'
    ])

    .constant('STATUS_DESCRIPTIONS', [
        'Burger (Beginner) Good! Your are a baby eater, ready to start on Man vs Burger?',
        'Double Burger (Intermediate) Fantastic! Man vs Burger you are won the battle! Are you ready to win the war? ',
        'Triple Burger (Super Power) Perfect! The Burger lost! The war is won! '
    ]);
