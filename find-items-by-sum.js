function findItems(items, sum, targetSum, data, index, result) {

    for (var i = index; i < data.length; i++) {
        var currentItems = items.slice();
        currentItems.push(data[i]);

        var currentSum = sum + data[i];

        if (currentSum === targetSum) {
            result.push(currentItems);
        } else if (i < data.length - 1) {
            findItems(
                currentItems,
                currentSum,
                targetSum,
                data,
                i + 1,
                result
            );
        }
    }
}

module.exports = function (targetSum, data) {
    var result = [];

    var allSum = data.reduce(function(prev, current) {
        return prev + current;
    }, 0);

    if (allSum < targetSum) {
        return [];
    }

    if (allSum === targetSum) {
        result.push(data.slice());
        return result;
    }

    findItems([], 0, targetSum, data, 0, result);

    return result;
};
