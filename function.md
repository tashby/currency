Below function would output the number of ways in the console using recursion. Taking console input of:
countcoins(100, [25,10,5,1])


function countcoins(t, o) {
    'use strict';
    var operandsLength = o.length;
    var solutions = 0;

    function permutate(a, x) {

        if (a === t) {
            solutions++;
        }

        else if (a < t) {
            for (var i = 0; i < operandsLength; i++) {
                if (i >= x) {
                    permutate(o[i] + a, i);
                }
            }
        }
    }

    permutate(0, 0);
    return solutions;
}
