function findCombinations(arr, target) {
    let y = [];
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          let x = arr[i]+arr[j];
            if ( Math.abs(x) === target) {
                y.push([arr[i], arr[j]]);
            }
        }
    }
    return y;
}

function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let subArr = arr[i];
        let subArrStr = JSON.stringify(subArr);
        if (!result.some(item => JSON.stringify(item) === subArrStr)) {
            result.push(subArr);
        }
    }
    return result;
}

function mergeAndSort(arr) {
    let mergedArr = [].concat(...arr);
    return mergedArr.sort((a, b) => a - b);
}

function findCombinationsForDoubleTarget(arr, target) {
    let doubleTarget = target * 2;
    let result = [];
    let helper = (temp, start) => {
        let sum = temp.reduce((a, b) => a + b, 0);
        if (sum === doubleTarget) {
            result.push(temp);
            return;
        }
        if (sum > doubleTarget) return;
        for (let i = start; i < arr.length; i++) {
            helper([...temp, arr[i]], i + 1);
        }
    }
    helper([], 0);
    return result;
}

let inputArr = [1, 3, 2, 2, -4, -6, -2, 8];
let targetValue = 4;

let firstCombination = findCombinations(inputArr, targetValue);


let removeDuplicate = removeDuplicates(firstCombination);
console.log("First Combination For “4” :", removeDuplicate);
let mergedArr = mergeAndSort(removeDuplicate);
console.log("Merge Into a single Array :", mergedArr);

let secondCombination = findCombinationsForDoubleTarget(mergedArr, targetValue);
console.log("Second Combination For “8” :", secondCombination);
