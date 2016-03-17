var findItems = require('./find-items-by-sum');

function printResult(items) {
    if (items.length === 0) {
        console.log('Решение не найдено!');
    } else {
        items.forEach(function(inner) {
            console.log(inner.join());
        });
    }
}

function findItemsBySum(sum, items) {
    console.log('Looking for items with sum = ' + sum + ' in [' + items.join() + ']');
    var result = findItems(sum, items);
    printResult(result);
    console.log();
}

findItemsBySum(15, [1, 2, 3, 4, 5]);
findItemsBySum(16, [1, 2, 3, 4, 5]);
findItemsBySum(13, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(14, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(15, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(16, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(17, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(18, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(19, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(20, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(21, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(22, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(23, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(24, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(25, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(26, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(27, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(28, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(29, [11, 16, 8, 4, 7, 6, 3, 12]);
findItemsBySum(30, [11, 16, 8, 4, 7, 6, 3, 12]);

findItemsBySum(40, [1, 3, 5, 7, 8, 9, 11, 2, 25, 30]);
findItemsBySum(45, [1, 3, 5, 7, 8, 9, 11, 2, 25, 30]);
findItemsBySum(50, [1, 3, 5, 7, 8, 9, 11, 2, 25, 30]);
findItemsBySum(55, [1, 3, 5, 7, 8, 9, 11, 2, 25, 30]);
findItemsBySum(60, [1, 3, 5, 7, 8, 9, 11, 2, 25, 30]);
