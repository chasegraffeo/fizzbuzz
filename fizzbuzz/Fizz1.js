function fizz() {
    for (f = 0; f <= 10; ++f) {       
        if (f >= 0 && f <= 4) {
            console.log(`${f} Fizz`)
        } else if (f >= 5 && f <= 9) {
            console.log(f + ' Buzz')
        }
        else if (f === 10) {
            console.log(f + ' Fizz Buzz')
        }
    }
}
fizz()
