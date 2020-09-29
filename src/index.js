exports.min = function min(array) {
  if (!array || array.length === 0) {
    return 0;
} else
{ let min = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
    }
} return min;
}
};


exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let max = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let x = 0;
        for (i = 0; i < array.length; i++) {
            x += array[i];
        }
        return x / array.length;
    }
};
