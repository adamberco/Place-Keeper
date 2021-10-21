'use strict'

function onInit() {
    renderUserPref()
    renderAstro()
}

function onMoveToPage(url) {
    window.open(url, "_self").focus();
}

function renderUserPref() {
    const userPref = getUserPref()
    let elNodes = document.querySelectorAll('.bg')
    let { textColor } = userPref
    let { bgColor } = userPref
    elNodes.forEach(node => {
        node.style.color = textColor
        node.style.backgroundColor = bgColor
    })
}

function renderAstro() {
    const userPref = getUserPref()
    let { astro } = userPref
    if (astro) {
        let elAstro = document.querySelector('.astro')
        let h2 = document.querySelector('.sec-astro h2')
        h2.innerText = 'Astrology'
        elAstro.innerText = astro
    }
}

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}