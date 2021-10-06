var socialMedia = {
    facebook: 'http://facebook.com',
    twitter: 'https://twitter.com/?lang=es',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
    github: 'https://github.com/',
    linkedin: 'https://co.linkedin.com/'
};


var socialList = function socialmediaicons() {
    var mostrar = '',
        social = document.querySelectorAll('.socialmediaicons');

    for (var icon in arguments[0]) {
        mostrar += '<a href="' + socialMedia[icon] + '">' +
            '<img src="Img/' + icon + '.png" ' + icon + '">' +
            '</a>';
    }

    for (var i = social.length - 1; i >= 0; i--) {
        social[i].innerHTML = mostrar;
    };
}(socialMedia);