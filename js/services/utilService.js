'use strict'
const gAstro = [
    'You are emotional, considerate, sympathetic and a great listener. People look to you for support during their lows and you are always there to lend a listening ear. You tend to bend more towards spirituality and that helps you come out of miserable situations without harming your inner peace. You are quite a romantic and highly imaginative. You remain unfazed by distractions and it is not easy to pull you down. Today you will be receiving the fruit of your hard work. You are going to work hard and the awards you receive in return are going to be even greater. You could be meeting up with school friends or perhaps someone new at the office. Any out-of-the-box experience will be great for you.',
    'This can be a positive day for you if you focus on your work and avoid some trip plans. Since you are good at managing finances and investing in property will be your first objective today. Your parents may seek your presence in a family function, so be there for them. Your spouse will give you extra attention today and shower love. Those who are planning to go on a trip may have to face some issues on the way. Bad weather or vehicle issues may ruin your short or long trip, so avoid trip plans today.',
    'you are intelligent and you tend to pick up knowledge regarding things more quickly than others. This helps you communicate with others easily. Today is the right time to execute your plans to work more efficiently with positive outcomes. You excel at any given task and that keeps you ahead of your contemporaries. However, you need to slow down a little and rest a bit. Overwork could wear you down. Students will do a good job on their academic front and make their parents proud. Travelling to an exotic location is on the cards for you, but weigh all options before embarking on the journey. Postpone your property investment plans.',
]

function resetToDefault() {
    localStorage.removeItem('textColor');
    localStorage.removeItem('bgColor');
    renderUserPref()
}

function getRandumAstro() {
    return gAstro[getRandomInt(0, 2)]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}