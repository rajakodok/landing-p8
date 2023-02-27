$(document).ready(function() {
    var delay = 46800;
    var jackpot = 0;
    pull_jackpot();
    var timer;
    function pull_jackpot() {
    var nominal = 1383806986;
    if (jackpot == 0) jackpot = parseInt(nominal - 100000000);
    var amount = 1000000 / delay * 1;
    timer = setInterval(function() { jackpot = set_jackpot(jackpot, nominal, amount); }, 1);
    }

    function set_jackpot(jackpot, nominal, amount) {
        var jackpot = jackpot + amount;
        if (jackpot >= nominal) {
            clearInterval(timer);
            pull_jackpot();
        } else {
            var result = addCommas(parseInt(jackpot));
            $('#jp').html(result);
        }
        return jackpot;
    }
    function addCommas(nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
})