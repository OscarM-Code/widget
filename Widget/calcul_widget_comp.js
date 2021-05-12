var un = document.getElementById('un');
var deux = document.getElementById('deux');
var trois = document.getElementById('trois');
var quatre = document.getElementById('quatre');
var cinq = document.getElementById('cinq');
var six = document.getElementById('six');
var sept = document.getElementById('sept');
var huit = document.getElementById('huit');
var neuf = document.getElementById('neuf');
var zero = document.getElementById('zero');
var plus = document.getElementById('plus');
var moins = document.getElementById('moins');
var multiplier = document.getElementById('multiplier');
var diviser = document.getElementById('diviser');
var clear = document.getElementById('clear');
var enter = document.getElementById('enter');
var decimal = document.getElementById('decimal');

un.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + '1';

});

deux.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + 2;

});

trois.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + 3;
    console.log(typeof contenu);
});

quatre.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').textContent;

    document.getElementById('resultat').textContent = contenu + 4;

});

cinq.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').textContent;

    document.getElementById('resultat').textContent = contenu + 5;

});

six.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + '6';

});

sept.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + '7';

});

huit.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + '8';

});

neuf.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + '9';

});

zero.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + '0';

});

plus.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + '+';

});

moins.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + '-';

});

multiplier.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + 'x';

});

diviser.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + '/';

});

clear.addEventListener('click', function() {

    document.getElementById('resultat').textContent = '';

});

decimal.addEventListener('click', function() {

    var contenu = document.getElementById('resultat').innerHTML;

    document.getElementById('resultat').textContent = contenu + '.';

});

enter.addEventListener('click', function() {

    var casifinal = document.getElementById('resultat').value;
    var final = eval(casifinal);
    document.getElementById('resultat').textContent = final;

});