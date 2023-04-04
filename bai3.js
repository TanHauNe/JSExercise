function text_truncate(text, limit, char) {
    if (char) {
        let a = text.slice(0, limit - char.length) + char;
        console.log(a);
    } else {
        let a = text.slice(0, limit - 3) + '...';
        console.log(a);
    }
}

text_truncate('We are doing JS string exercises.', 15,"!!");
