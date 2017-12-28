function logScope() {
    var localVar = 2;

    if (localVar) {
        let localVar = 'I\'m totally different!';
        console.log('nested localVar: ', localVar);
    }

    console.log('logScope localVar: ', localVar);
}

logScope();