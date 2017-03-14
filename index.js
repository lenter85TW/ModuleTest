/**
 * Created by kimdoeun on 2017. 3. 14..
 */

var sum = 0;
function lenterSum(a, b) {
    sum = sum + a + b;
    return a + b;
}

function getSum() {
    return sum;
}

exports.lenterSum = lenterSum;
exports.sum = sum;
exports.getSum = getSum;

