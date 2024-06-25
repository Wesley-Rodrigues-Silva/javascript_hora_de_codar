function checkArray(arr) {
    if (arr.length === 0) {
        throw new Error('O array precisa ter elementos')
    } else {
        console.log(`Você informou um array com ${arr.length} elementos`)
    }
}

checkArray([1,2,3])