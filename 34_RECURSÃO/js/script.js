const untilTen = (n, m) => {
    if (n < 10) {
        console.log('A função parou de executar')
    } else {
        const x = n - m

        console.log(x)

        untilTen(x, m);
    }
}
untilTen(100, 7);

