function camelize(text) {
    let a = text.split(' ');
    var b = '';
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
        b = b + a[i];
    }
    console.log(b);
}

camelize('JavaScriptexercises');
