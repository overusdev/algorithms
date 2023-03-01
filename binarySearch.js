const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch({ arr, target }) {
    let left = 0;
    let right = arr.length;
    let mid;

    while( left <= right) {
        mid = Math.round((right - left) / 2) + left;

        if(target === arr[mid]) {
            return mid;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid - 1;
        }
    }
}

console.log(binarySearch({ arr: numbersList, target: 6}));