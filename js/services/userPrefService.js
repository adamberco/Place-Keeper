'use strict'

function saveUserPref(str, value) {
    saveToStorage(str, value)
    if (str === 'dateOfBirth') {
        var age = (new Date).getFullYear() - (new Date(value)).getFullYear()
        saveToStorage('age', age)
        saveToStorage('astro', getRandumAstro(0, 2))
    }
    renderUserPref()
}

function getUserPref() {
    const pref = {
        dateOfBirth: loadFromStorage('dateOfBirth'),
        age: loadFromStorage('age'),
        textColor: loadFromStorage('textColor'),
        bgColor: loadFromStorage('bgColor'),
        timeOfBirth: loadFromStorage('timeOfBirth'),
        astro: loadFromStorage('astro'),

    }
    return pref
}
