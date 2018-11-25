angular.module('nibs.config', [])

    .constant('SERVER_URL', null)

    .constant('HOST', 'https: //demo-loyalty-generic.herokuapp.com/')

    .constant('FB_APP_ID', '180938355946407')

    .constant('STATUS_LABELS', [
        'Chick',
        'Chicken',
        'Rooster'
    ])

    .constant('STATUS_DESCRIPTIONS', [
        'Chick (Beginner) Good mooning Chick! You started to improve your point, Do you like Amadori? Follow me to growh your status!',
        'Chicken (Intermediate) Great! You became a beautifull chicken, Are you ready to be a fantastic dish? I am joking :P ',
        'Rooster(Super Power) Perfect! You are the king, help us to join others Chick now! '
    ]);
