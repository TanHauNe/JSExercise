function check(a) {
    var b = '';
    for (let j = a.length - 1; j >= 0; j--) {
        b = b + a[j];
    }
    if (typeof a != 'string') {
        console.log('It must be a string.');
    } else if (a == b) {
        console.log('true');
    } else {
        console.log('false');
    }
}

check("civic");
