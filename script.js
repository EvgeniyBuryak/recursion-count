function countdown(n) {
    if (n < 1) {
        return [];
    }
    else {
        const countArray = countdown(n - 1);
        /*
         * если после точки поставить .push(n),
         * массив будет [1, 2, 3, 4, 5]

        */
        countArray.unshift(n); 
        return countArray;
    }
}

console.log(countdown(5)); // [5, 4, 3, 2, 1]
