const numbersList = [-1, 6, 3, 8, 5, 12, 7, 2, 9, 10];

function binarySearch({ arr, target }) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while( left <= right) {
        mid = Math.round((right - left) / 2) + left;

        if(target === arr[mid]) {
            return mid;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch({ arr: numbersList, target: 22}));